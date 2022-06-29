import { ApiProperty } from '@nestjs/swagger';
import { GenreDto } from './genre.dto';

export class AuthorDto {
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

  // @ApiProperty()
  // books: BookDto[];

  @ApiProperty()
  genres: GenreDto[];
}
