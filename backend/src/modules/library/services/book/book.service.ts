import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../../entities/book.entity';
import { Repository } from 'typeorm';
import { toMinimalBookDto } from '../../helpers/mapper';
import { MinimalBookDto } from '../../dto/minimal-book.dto';
import { PageOptionsDto } from '../../../core/dto/page-options.dto';
import { PageDto } from '../../../core/dto/page.dto';
import { PageMetaDto } from '../../../core/dto/page-meta.dto';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private readonly bookRepository: Repository<Book>) {}

  create(book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  findOne(id: number): Promise<Book | null> {
    return this.bookRepository.findOneOrFail(id);
  }

  async findAll(): Promise<MinimalBookDto[]> {
    const books = await this.bookRepository.find();
    return books.map(book => toMinimalBookDto(book));
  }

  async findPaginated(pageOptions: PageOptionsDto): Promise<PageDto<MinimalBookDto>> {
    const queryBuilder = this.bookRepository.createQueryBuilder('book');

    queryBuilder
      .orderBy(`book.${pageOptions.orderBy}`, pageOptions.order)
      .skip(pageOptions.skip)
      .take(pageOptions.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities<Book>();

    const books = entities.map(ent => toMinimalBookDto(ent));

    const pageMeta = new PageMetaDto({ itemCount, pageOptions });

    return new PageDto(books, pageMeta);
  }

  sortBooks(sortBy: string, sortOrder: string): Promise<Book[]> {
    if (sortBy === 'title' && sortOrder === 'desc') {
      return this.bookRepository.find({
        order: {
          title: 'DESC',
        },
      });
    }
    if (sortBy === 'title' && sortOrder === 'asc') {
      {
        return this.bookRepository.find({
          order: { title: 'ASC' },
        });
      }
    }
    if (sortBy === 'price' && sortOrder === 'desc') {
      return this.bookRepository.find({
        order: {
          price: 'DESC',
        },
      });
    }
    if (sortBy === 'price' && sortOrder === 'asc') {
      return this.bookRepository.find({
        order: { price: 'ASC' },
      });
    }
    if (sortBy === 'rating' && sortOrder === 'desc') {
      return this.bookRepository.find({
        order: {
          rating: 'DESC',
        },
      });
    }
    if (sortBy === 'rating' && sortOrder === 'asc') {
      return this.bookRepository.find({
        order: { rating: 'ASC' },
      });
    }
    if (sortBy === 'author' && sortOrder === 'desc') {
      return this.bookRepository.find({
        order: { author: 'DESC' },
      });
    }
    if (sortBy === 'author' && sortOrder === 'asc') {
      return this.bookRepository.find({
        order: { author: 'ASC' },
      });
    }
    if (sortBy === 'publisher' && sortOrder === 'desc') {
      return this.bookRepository.find({
        order: { publisher: 'DESC' },
      });
    }
    if (sortBy === 'publisher' && sortOrder === 'asc') {
      return this.bookRepository.find({
        order: { publisher: 'ASC' },
      });
    }
    throw new HttpException('Bad sorting parameters', HttpStatus.BAD_REQUEST);
  }

  async updateOne(book): Promise<Book> {
    const foundBook = await this.findOne(book.id);

    if (!foundBook) throw new HttpException('Book not found ', HttpStatus.NOT_FOUND);
    await this.bookRepository.update(book.id, book);

    return this.findOne(book.id);
  }
}
