import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JWTStrategy } from './strategies/jwt.strategy';
import { GoogleAuthStrategy } from './strategies/google-auth.strategy';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [CoreModule, UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JWTStrategy, GoogleAuthStrategy],
  exports: [JWTStrategy],
})
export class AuthModule {}
