import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { CartDto } from '../../../cart/dto/cart.dto';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_API_KEY, { apiVersion: '2020-08-27' });
  }

  checkout(cart: CartDto): Promise<Stripe.Response<Stripe.PaymentIntent>> {
    const { total, currency } = cart;

    return this.stripe.paymentIntents.create({
      currency,
      amount: total * 100,
      payment_method_types: ['card'],
    });
  }
}
