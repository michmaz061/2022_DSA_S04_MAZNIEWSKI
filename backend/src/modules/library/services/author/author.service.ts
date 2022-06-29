import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../../entities/author.entity';
import { Repository } from 'typeorm';
import { AuthorDto } from '../../dto/author.dto';
import { toAuthorDto, toMinimalAuthorDto } from '../../helpers/mapper';
import { PageDto } from '../../../core/dto/page.dto';
import { PageOptionsDto } from '../../../core/dto/page-options.dto';
import { PageMetaDto } from '../../../core/dto/page-meta.dto';
import { MinimalAuthorDto } from '../../dto/minimal-author.dto';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(Author) private readonly authorRepository: Repository<Author>) {}

  async findOne(id: number): Promise<AuthorDto | null> {
    return toAuthorDto(await this.authorRepository.findOneOrFail(id));
  }

  async findAll(): Promise<AuthorDto[]> {
    const authors = await this.authorRepository.find({ relations: ['books'] });
    return authors.map(author => toAuthorDto(author));
  }

  async findPaginated(pageOptions: PageOptionsDto): Promise<PageDto<MinimalAuthorDto>> {
    const queryBuilder = this.authorRepository.createQueryBuilder('author');

    queryBuilder
      .orderBy(`author.${pageOptions.orderBy}`, pageOptions.order)
      .skip(pageOptions.skip)
      .take(pageOptions.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities<Author>();

    const authors = entities.map(ent => toMinimalAuthorDto(ent));

    const pageMeta = new PageMetaDto({ itemCount, pageOptions });

    return new PageDto(authors, pageMeta);
  }
}
