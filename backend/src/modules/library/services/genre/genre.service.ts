import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from '../../entities/genre.entity';
import { Repository } from 'typeorm';
import { PageOptionsDto } from '../../../core/dto/page-options.dto';
import { PageDto } from '../../../core/dto/page.dto';
import { GenreDto } from '../../dto/genre.dto';
import { PageMetaDto } from '../../../core/dto/page-meta.dto';

@Injectable()
export class GenreService {
  constructor(@InjectRepository(Genre) private readonly genreRepository: Repository<Genre>) {}

  findOne(id: number): Promise<Genre | null> {
    return this.genreRepository.findOneOrFail(id);
  }

  findAll(): Promise<Genre[]> {
    return this.genreRepository.find();
  }

  sortGenres(sortOrder: string): Promise<Genre[]> {
    if (sortOrder === 'asc') {
      return this.genreRepository.find({
        order: {
          name: 'ASC',
        },
      });
    }
    if (sortOrder === 'desc') {
      return this.genreRepository.find({
        order: {
          name: 'DESC',
        },
      });
    }
    throw new HttpException('Bad sorting parameters', HttpStatus.BAD_REQUEST);
  }

  async findPaginated(pageOptions: PageOptionsDto): Promise<PageDto<GenreDto>> {
    const queryBuilder = this.genreRepository.createQueryBuilder('genre');

    queryBuilder
      .orderBy(`genre.${pageOptions.orderBy}`, pageOptions.order)
      .skip(pageOptions.skip)
      .take(pageOptions.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities<Genre>();

    const pageMeta = new PageMetaDto({ itemCount, pageOptions });

    return new PageDto(entities, pageMeta);
  }
}
