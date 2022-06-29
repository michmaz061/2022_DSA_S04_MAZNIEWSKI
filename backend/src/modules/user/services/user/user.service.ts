import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { UserDto } from '../../dto/user.dto';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { SignInDto } from '../../../auth/dto/sign-in.dto';
import { toUserDto } from '../../helpers/mapper';
import { matchCypheredText } from '../../helpers/cypher-matcher';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(user: CreateUserDTO): Promise<UserDto> {
    const existingUser = await this.userRepository.findOne({ where: { username: user.username } });
    if (existingUser) throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);

    const createdUser = await this.userRepository.create(user);
    await this.userRepository.save(createdUser);

    return toUserDto(createdUser);
  }

  async findByUsername(signInDTO: SignInDto): Promise<UserDto> {
    const existingUser = await this.userRepository.findOne({ where: { username: signInDTO.username } });
    if (!existingUser) throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);

    if (!matchCypheredText(signInDTO.password, existingUser.password))
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);

    return toUserDto(existingUser);
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async findByIdFromJWT(authHeader: string): Promise<UserDto> {
    const token = this.jwtService.decode(authHeader.split(' ')[1]);
    const user = await this.userRepository.findOne(token.sub);
    return toUserDto(user);
  }

  async updateUser(user: UpdateUserDto): Promise<User> {
    const existingUser = await this.findById(user.id);
    await this.userRepository.update(existingUser.id, user);
    return await this.findById(existingUser.id);
  }

  async deleteUser(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
