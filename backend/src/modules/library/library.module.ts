import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books/books.controller';
import { AuthorsController } from './controllers/authors/authors.controller';
import { GenreController } from './controllers/genre/genre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BookService } from './services/book/book.service';
import { GenreService } from './services/genre/genre.service';
import { Genre } from './entities/genre.entity';
import { AuthorService } from './services/author/author.service';
import { Author } from './entities/author.entity';
import { HomeController } from './controllers/home/home.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Genre, Author])],
  controllers: [BooksController, AuthorsController, GenreController, HomeController],
  providers: [BookService, GenreService, AuthorService],
})
export class LibraryModule {}
