import { ApiProperty } from '@nestjs/swagger';

export class MinimalBookDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  subtitle?: string;

  @ApiProperty()
  coverImageUrl: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  publisher: string;
}
