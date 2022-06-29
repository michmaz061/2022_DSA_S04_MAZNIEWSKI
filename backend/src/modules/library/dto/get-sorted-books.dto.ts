import { ApiProperty } from '@nestjs/swagger';

export class GetSortedBooksDTO {
  @ApiProperty({
    description: 'Selected property of book entity to perform the sorting',
    enum: ['title', 'price', 'publisher', 'genre', 'author'],
    required: false,
  })
  sortBy: string;

  @ApiProperty({
    description: 'Order of the sorting',
    enum: ['asc', 'desc'],
    required: false,
  })
  sortOrder: string;
}
