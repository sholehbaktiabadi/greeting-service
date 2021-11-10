import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getFormatTimezone } from '../../utils/time.utils';
import { EntityNotFoundError, Repository } from 'typeorm';
import { MessagerService } from '../messager/messager.service';
import { HalfMinute, nullMinute, OneDays, UserDto } from './dto/user.dto';
import { User } from './model/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private messagerService: MessagerService,
  ) {}

  async getAll() {
    return await this.userRepository.find();
  }

  async create(dto: UserDto) {
    try {
      const data = new User();
      data.firstName = dto.firstName;
      data.lastName = dto.lastName;
      data.timezone = dto.localTime;
      return await this.userRepository.save(dto);
    } catch (error) {
      return error;
    }
  }

  async del(id: number) {
    const select = await this.userRepository.findOne(id);
    if (!select) {
      throw new EntityNotFoundError(User, id);
    }
    return await this.userRepository.delete(id);
  }

  async changeRecieveStatus(id: number) {
    const select = await this.userRepository.findOne(id);
    select.isRecieved = true;
    return await this.userRepository.save(select);
  }

  async sentMessage() {
    const resultRes = [];
    const user = await this.userRepository.find({
      where: { isRecieved: false },
    });
    console.log(user);
    user.map(
      async (res) =>
        await this.messagerService
          .sent(res.firstName + ' ' + res.lastName)
          .then(async (result) => {
            if (result) {
              await this.changeRecieveStatus(res.id).then(() => {
                resultRes.push(res.id);
              });
            }
          }),
    );
    return resultRes;
  }

  async bulkMessage() {
    const user = await this.userRepository.find({
      where: { isRecieved: false },
    });
    user
      .filter(
        (data) =>
          getFormatTimezone(data.timezone, data.birtday, data.firstName) >
            nullMinute &&
          getFormatTimezone(data.timezone, data.birtday, data.firstName) <=
            HalfMinute,
      )
      .map(
        async (res) =>
          await this.messagerService
            .sent(res.firstName + ' ' + res.lastName)
            .then((data) => {
              if (data) {
                this.userRepository.findOne(res.id).then((user) => {
                  user.isRecieved = true;
                  this.userRepository.save(user);
                });
              }
            }),
      );
  }

  async bulkMessageBackup() {
    const user = await this.userRepository.find({
      where: { isRecieved: false },
    });
    const selection = user.filter(
      (data) =>
        getFormatTimezone(data.timezone, data.birtday, data.firstName) >
          HalfMinute &&
        getFormatTimezone(data.timezone, data.birtday, data.firstName) <
          OneDays,
    );
    selection.map(
      async (res) =>
        await this.messagerService
          .sent(res.firstName + ' ' + res.lastName)
          .then((data) => {
            if (data) {
              this.userRepository.findOne(res.id).then((user) => {
                user.isRecieved = true;
                this.userRepository.save(user);
              });
            }
          }),
    );
  }
}
