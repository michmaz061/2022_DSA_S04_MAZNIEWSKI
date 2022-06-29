import { ApiProperty } from '@nestjs/swagger';
import { CartItemDto } from './cart-item.dto';

export class CartDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  items: CartItemDto[];

  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  total: number;

  @ApiProperty()
  updatedAt: Date;
}
