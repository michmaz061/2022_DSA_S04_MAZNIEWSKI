import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StripeService } from '../../services/stripe/stripe.service';
import { CartDto } from '../../../cart/dto/cart.dto';

@ApiTags('Payments')
@Controller('payments')
export class PaymentController {
  constructor(private stripeService: StripeService) {}

  @Get(':id')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getPaymentById() {}

  @Get('history')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getPaymentsHistory() {}

  @Post()
  createCheckout(@Body() body: CartDto) {
    return this.stripeService.checkout(body);
  }
}
