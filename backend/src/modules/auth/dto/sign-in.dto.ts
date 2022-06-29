import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    description: 'Unique username (emaiL)',
  })
  @IsNotEmpty()
  readonly username: string;
  @ApiProperty() @IsNotEmpty() readonly password: string;
}
