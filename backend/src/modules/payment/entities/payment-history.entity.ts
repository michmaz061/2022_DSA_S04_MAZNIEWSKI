import { Payment } from './payment.entity';
import { Entity, OneToMany, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from '../../core/entities/BaseEntity';

@Entity('payment_history')
export class PaymentHistory extends BaseEntity {
  @OneToMany(() => Payment, payment => payment.paymentHistory)
  payments: Payment[];

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
