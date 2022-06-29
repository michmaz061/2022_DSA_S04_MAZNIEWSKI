import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../core/entities/BaseEntity';

@Entity('transaction_type')
export class TransactionType extends BaseEntity {
  @Column()
  name: string;
}
