import { UserDto } from '../../user/dto/user.dto';
import { User } from '../../user/entities/user.entity';

export const toUserDto = (data: User): UserDto => {
  return {
    id: data.id,
    username: data.username,
    email: data.email,
    name: data.name,
    surname: data.surname,
    joinedAt: data.createdAt,
    lastUpdated: data.updatedAt,
  };
};
