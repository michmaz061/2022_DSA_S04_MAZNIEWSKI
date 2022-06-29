import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from '../../entities/cart.entity';
import { Repository } from 'typeorm';

// import { toCartDto } from '../../helpers/mapper';

@Injectable()
export class CartService {
  constructor(@InjectRepository(Cart) private readonly cartRepository: Repository<Cart>) {}

  // async create(cart: CreateCartDto): Promise<CartDto> {
  //   const createdCart = await this.cartRepository.create(cart);
  //
  //   if (!createdCart) throw new HttpException('Error creating cart for user', HttpStatus.SERVICE_UNAVAILABLE);
  //
  //   return toCartDto(createdCart);
  // }
  //
  // async findOne(id: number): Promise<CartDto> {
  //   const foundCart = await this.cartRepository.findOne(id, {
  //     relations: ['books'],
  //   });
  //
  //   if (!foundCart) throw new HttpException('Cart not found', HttpStatus.NOT_FOUND);
  //
  //   return toCartDto(foundCart);
  // }

  // async update(cart: UpdateCartDto): Promise<CartDto> {
  //   const existingCart = await this.findOne(cart.id);
  //
  //   await this.cartRepository.update(existingCart.id, cart);
  //
  //   return await this.findOne(existingCart.id);
  // }
}
