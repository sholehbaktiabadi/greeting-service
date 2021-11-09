import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  localTime: string;
}

export class resultDto {
  name: string;
  success: string;
}
