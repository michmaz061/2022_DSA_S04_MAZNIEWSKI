import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Book } from './book.entity';
import { Genre } from './genre.entity';
import { BaseEntity } from '../../core/entities/BaseEntity';

@Entity('author')
export class Author extends BaseEntity {
  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  bio: string;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @Column({ nullable: true, name: 'is_popular', default: false })
  isPopular: boolean;

  @Column({ nullable: true, name: 'is_best_seller', default: false })
  isBestSeller: boolean;

  @OneToMany(() => Book, book => book.author)
  books: Book[];

  @ManyToMany(() => Genre)
  genres: Genre[];
}
