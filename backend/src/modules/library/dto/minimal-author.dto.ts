import { ApiProperty } from '@nestjs/swagger';

export class MinimalAuthorDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  bio: string;

  @ApiProperty()
  imageUrl: string;
}
