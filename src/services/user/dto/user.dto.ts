import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  isRecieved?: boolean; 

  createdAt?: Date;

  @IsNotEmpty()
  locationTime: string;
}

export class resultDto {
  name: string;
  success: string;
}
