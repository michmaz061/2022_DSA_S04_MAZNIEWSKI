import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../../user/services/user/user.service';
import { CreateUserDTO } from '../../../user/dto/create-user.dto';
import { UserDto } from '../../../user/dto/user.dto';
import { User } from '../../../user/entities/user.entity';
import { SignInDto } from '../../dto/sign-in.dto';
import { SignInResponseDto } from '../../dto/sign-in-response.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(credentials: SignInDto): Promise<UserDto | undefined> {
    return this.userService.findByUsername(credentials);
  }

  async signIn(user: User): Promise<SignInResponseDto> {
    const payload = { username: user.username, sub: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }

  async signUp(user: CreateUserDTO): Promise<UserDto> {
    return await this.userService.create(user);
  }

  // googleSignIn(req): GoogleSignInResponse | undefined {
  //   if (!req.user) {
  //     return null;
  //   }
  //
  //   return {
  //     message: 'User information from google',
  //     user: req.user,
  //   };
  // }
}
