import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Author } from './author.entity';
import { Genre } from './genre.entity';
import { BaseEntity } from '../../core/entities/BaseEntity';

@Entity('book')
export class Book extends BaseEntity {
  @Column({ nullable: true })
  isbn10: string;

  @Column({ nullable: true })
  isbn13: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  subtitle: string;

  @Column()
  description: string;

  @Column({ name: 'cover_image_url' })
  coverImageURL: string;

  @Column()
  price: number;

  @Column()
  publisher: string;

  @Column({ name: 'release_date' })
  releaseData: Date;

  @Column()
  rating: number;

  @Column({ name: 'is_best_seller', nullable: true, default: false })
  isBestSeller: boolean;

  @ManyToOne(() => Author, author => author.books)
  @JoinColumn({ name: 'author_id' })
  author: Author;

  @ManyToOne(() => Genre, genre => genre.books)
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;
}
