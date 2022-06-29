import { ApiProperty } from '@nestjs/swagger';
import { GenreDto } from './genre.dto';
import { MinimalAuthorDto } from './minimal-author.dto';

export class BookDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  isbn10?: string;

  @ApiProperty()
  isbn13?: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  subtitle?: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  coverImageUrl: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  publisher: string;

  @ApiProperty()
  releaseDate: Date;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  author: MinimalAuthorDto;

  @ApiProperty()
  genre: GenreDto;
}
