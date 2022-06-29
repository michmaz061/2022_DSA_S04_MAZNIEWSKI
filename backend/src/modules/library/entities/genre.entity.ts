import { Column, Entity, OneToMany } from 'typeorm';
import { Book } from './book.entity';
import { BaseEntity } from '../../core/entities/BaseEntity';

@Entity('genre')
export class Genre extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Book, book => book.genre)
  books: Book[];
}
