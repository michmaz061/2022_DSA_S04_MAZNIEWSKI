import { PaymentHistory } from './payment-history.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { PaymentType } from './payment-type.entity';
import { BaseEntity } from '../../core/entities/BaseEntity';

@Entity('payment')
export class Payment extends BaseEntity {
  @Column()
  date: Date;

  @OneToMany(() => PaymentType, paymentType => paymentType.payments)
  @JoinColumn()
  paymentType: PaymentType;

  @ManyToOne(() => PaymentHistory, paymentHistory => paymentHistory.payments)
  paymentHistory: PaymentHistory;
}
