import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { LibraryModule } from './modules/library/library.module';
import { CartModule } from './modules/cart/cart.module';
import { PaymentModule } from './modules/payment/payment.module';
import { CoreModule } from './modules/core/core.module';

@Module({
  imports: [CoreModule, DatabaseModule, AuthModule, LibraryModule, CartModule, PaymentModule],
})
export class AppModule {}
