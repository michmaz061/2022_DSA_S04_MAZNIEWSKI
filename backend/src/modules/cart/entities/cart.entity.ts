import { Column, Entity, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from '../../core/entities/BaseEntity';

@Entity('cart')
export class Cart extends BaseEntity {
  // @ManyToMany(() => Book)
  // @JoinTable()
  // books: Book[];

  @Column()
  totalItems: number;

  @Column()
  total: number;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
