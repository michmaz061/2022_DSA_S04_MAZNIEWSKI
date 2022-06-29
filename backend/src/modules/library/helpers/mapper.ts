import { Author } from '../entities/author.entity';
import { AuthorDto } from '../dto/author.dto';
import { Book } from '../entities/book.entity';
import { BookDto } from '../dto/book.dto';
import { MinimalAuthorDto } from '../dto/minimal-author.dto';
import { MinimalBookDto } from '../dto/minimal-book.dto';

export const toMinimalAuthorDto = (data: Author): MinimalAuthorDto => {
  return {
    id: data.id,
    name: data.name,
    surname: data.surname,
    bio: data.bio,
    imageUrl: data.imageUrl,
  };
};

export const toAuthorDto = (data: Author): AuthorDto => {
  return {
    id: data.id,
    name: data.name,
    surname: data.surname,
    bio: data.bio,
    // books: data.books.map(book => toBookDto(book)),
    genres: data.genres,
    imageUrl: data.imageUrl,
  };
};

export const toMinimalBookDto = (data: Book): MinimalBookDto => {
  return {
    id: data.id,
    title: data.title,
    subtitle: data?.subtitle,
    price: data.price,
    publisher: data.publisher,
    coverImageUrl: data.coverImageURL,
  };
};

export const toBookDto = (data: Book): BookDto => {
  return {
    id: data.id,
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    isbn10: data.isbn10,
    isbn13: data.isbn13,
    author: toMinimalAuthorDto(data.author),
    coverImageUrl: data.coverImageURL,
    genre: data.genre,
    price: data.price,
    publisher: data.publisher,
    rating: data.rating,
    releaseDate: data.releaseData,
  };
};
