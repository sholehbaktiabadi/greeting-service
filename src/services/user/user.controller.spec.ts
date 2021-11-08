import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  const mockUserServices = {
      create: jest.fn(dto => {
        return {
          id: expect.any(Number),
          ...dto
        }
      })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    }).overrideProvider(UserService).useValue(mockUserServices).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create a user', async () => {
      await expect(controller.create({firstName: 'a', lastName: 'b', locationTime: "Australia/Sydney", isRecieved: false})).toEqual({
      id: expect.any(Number),
      firstName: 'a',
      lastName:'b',
      isRecieved: false,
      localTime: 'Australia/Sydney',
      createdAt: expect.any(new Date)
    })
  });
});
