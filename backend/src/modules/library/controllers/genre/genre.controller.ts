import { Controller, Get, Param, Query } from '@nestjs/common';
import { GenreService } from '../../services/genre/genre.service';
import { Genre } from '../../entities/genre.entity';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GenreDto } from '../../dto/genre.dto';
import { PageOptionsDto } from '../../../core/dto/page-options.dto';
import { PageDto } from '../../../core/dto/page.dto';

@ApiTags('Genres')
@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get(':id')
  getGenreById(@Param('id') id: number): Promise<Genre> {
    return this.genreService.findOne(id);
  }

  @Get()
  @ApiOkResponse({ description: 'Fetched books from DB', type: [GenreDto] })
  getGenres(@Query() pageOptionsDto: PageOptionsDto): Promise<PageDto<GenreDto>> {
    return this.genreService.findPaginated(pageOptionsDto);
  }
}
