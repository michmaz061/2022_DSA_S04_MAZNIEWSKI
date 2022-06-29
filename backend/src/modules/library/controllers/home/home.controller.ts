import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorService } from '../../services/author/author.service';
import { BookService } from '../../services/book/book.service';
import { GenreService } from '../../services/genre/genre.service';
import { Genre } from '../../entities/genre.entity';
import { AuthorDto } from '../../dto/author.dto';
import { MinimalBookDto } from '../../dto/minimal-book.dto';

@ApiTags('Home')
@Controller('home')
export class HomeController {
  constructor(
    private readonly authorService: AuthorService,
    private readonly bookService: BookService,
    private readonly genreService: GenreService,
  ) {}

  @Get('books')
  getHomePageBooks(): Promise<MinimalBookDto[]> {
    return this.bookService.findAll();
  }

  @Get('authors')
  getHomePageAuthors(): Promise<AuthorDto[]> {
    return this.authorService.findAll();
  }

  @Get('genres')
  getHomePageGenres(): Promise<Genre[]> {
    return this.genreService.findAll();
  }
}
