import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from '../../../user/dto/user.dto';
import { CreateUserDTO } from '../../../user/dto/create-user.dto';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { SignInResponseDto } from '../../dto/sign-in-response.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  signIn(@Req() req): Promise<SignInResponseDto> {
    return this.authService.signIn(req.user);
  }

  @Post('sign-up')
  signUp(@Body() user: CreateUserDTO): Promise<UserDto> {
    return this.authService.signUp(user);
  }

  // @Get('google')
  // @UseGuards(GoogleAuthGuard)
  // // eslint-disable-next-line @typescript-eslint/no-empty-function
  // googleAuth(@Req() req) {}
  //
  // @Get('google/redirect')
  // @UseGuards(GoogleAuthGuard)
  // googleAuthRedirect(@Req() req): GoogleSignInResponse | undefined {
  //   return this.authService.googleSignIn(req);
  // }
}
