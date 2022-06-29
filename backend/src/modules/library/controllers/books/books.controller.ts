import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../entities/book.entity';
import { MinimalBookDto } from '../../dto/minimal-book.dto';
import { PageOptionsDto } from '../../../core/dto/page-options.dto';
import { PageDto } from '../../../core/dto/page.dto';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookService) {}

  @Get(':id')
  getBookById(@Param('id') id: number): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Get('all')
  getAllBooks(): Promise<MinimalBookDto[]> {
    return this.bookService.findAll();
  }

  @Get()
  getBook(@Query() pageOptionsDto: PageOptionsDto): Promise<PageDto<MinimalBookDto>> {
    return this.bookService.findPaginated(pageOptionsDto);
  }

  // @Get()
  // @ApiQuery({ name: 'page', required: false, example: 2, description: 'requested page' })
  // @ApiQuery({ name: 'limit', required: false, example: 10, description: 'items per page' })
  // @ApiQuery({ name: 'sortBy', required: false, enum: ['title', 'price', 'publisher', 'genre', 'author'] })
  // @ApiQuery({ name: 'sortOrder', required: false, enum: ['asc', 'desc'] })
  // @ApiOkResponse({ description: 'Fetched books from DB', type: [BookDto] })
  // getBooks(
  //   @Query('page') page = 1,
  //   @Query('limit') limit = 10,
  //   @Query('sortBy') sortBy?: string,
  //   @Query('sortOrder') sortOrder?: string,
  // ): Observable<Pagination<Book>> | Promise<Book[]> {
  //   if (sortBy && sortOrder) {
  //     return this.bookService.sortBooks(sortBy, sortOrder);
  //   }
  //   return this.bookService.findAllPaginate({ page, limit, route: 'localhost:3000/books' });
  // }

  @Put(':id')
  updateBook(@Body() book): Promise<Book> {
    return this.bookService.updateOne(book);
  }
}
