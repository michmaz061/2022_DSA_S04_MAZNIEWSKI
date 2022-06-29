import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, UpdateDateColumn } from 'typeorm';
import * as crypto from 'crypto';
import { Cart } from '../../cart/entities/cart.entity';
import { PaymentHistory } from '../../payment/entities/payment-history.entity';
import { BaseEntity } from '../../core/entities/BaseEntity';

@Entity('user')
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  @Column()
  password: string;

  @OneToOne(() => Cart)
  @JoinColumn()
  cart: Cart;

  @OneToOne(() => PaymentHistory)
  @JoinColumn()
  paymentHistory: PaymentHistory;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
