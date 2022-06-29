import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthorService } from '../../services/author/author.service';
import { AuthorDto } from '../../dto/author.dto';
import { PageDto } from '../../../core/dto/page.dto';
import { PageOptionsDto } from '../../../core/dto/page-options.dto';
import { MinimalAuthorDto } from '../../dto/minimal-author.dto';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorService: AuthorService) {}

  @Get(':id')
  getAuthorById(@Param('id') id: number): Promise<AuthorDto> {
    return this.authorService.findOne(id);
  }

  @Get()
  @ApiOkResponse({ description: 'Fetched books from DB', type: [MinimalAuthorDto] })
  getAuthors(@Query() pageOptionsDto: PageOptionsDto): Promise<PageDto<MinimalAuthorDto>> {
    return this.authorService.findPaginated(pageOptionsDto);
  }

  @Get('all')
  @ApiOkResponse({ description: 'Fetched books from DB', type: [MinimalAuthorDto] })
  getAllAuthors(): Promise<AuthorDto[]> {
    return this.authorService.findAll();
  }
}
