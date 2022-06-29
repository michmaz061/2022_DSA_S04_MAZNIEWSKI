import { Author } from '../entities/author.entity';
export class GetFilteredBooksDTO {
  title: string;
  price: number;
  rating: number;
  author: Author;
  publisher: string;
}
