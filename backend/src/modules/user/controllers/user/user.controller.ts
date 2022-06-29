import { Controller, Get, Headers } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../../services/user/user.service';
import { UserDto } from '../../dto/user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // TODO: re implement these methods
  @Get('info')
  getUserInfo(@Headers() headers): Promise<UserDto> {
    return this.userService.findByIdFromJWT(headers['authorization']);
  }

  //
  // @Put()
  // updateUser(user: UpdateUserDto): Promise<User> {
  //   return this.userService.updateUser(user);
  // }
  //
  // @Delete()
  // deleteUser(): Promise<any> {
  //   return this.userService.deleteUser(id);
  // }
}
