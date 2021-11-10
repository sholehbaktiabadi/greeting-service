import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  localTime: string;

  @IsNotEmpty()
  birthday: Date;
}

export class resultDto {
  name: string;
  success: string;
}

export const OneDays: number = 1440;
export const HalfMinute: number = 30;
export const nullMinute: number = 0;
export const OneWeek: number = 10080;
