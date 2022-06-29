import { Column, Entity, ManyToOne } from 'typeorm';
import { Payment } from './payment.entity';
import { BaseEntity } from '../../core/entities/BaseEntity';

@Entity('payment_type')
export class PaymentType extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Payment, payment => payment.paymentType)
  payments: Payment[];
}
