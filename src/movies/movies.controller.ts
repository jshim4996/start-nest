import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAllMovie();
  }

  @Get('search')
  getSearchMove(@Query('id') movieId: string): Movie[] {
    return this.moviesService.getFindMovie('movieId');
  }

  @Get('/:id')
  getOneMovie(@Param('id') movieId: string): Movie {
    return this.moviesService.getOneMovie(movieId);
  }

  //@body 로 body 값을 사용할수 있다.
  @Post()
  getCreate(@Body() form) {
    this.moviesService.createMovie(form);
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return this.moviesService.deleteMovie(movieId);
    // return `해당 ${movieId} 값의 영화를 삭제합니다.`;
  }

  // 전체 수정을 할때는 put
  // 일부분 수정을 할때는 patch
  @Put('/:id')
  modify(@Param('id') movieId: string, @Body() form) {
    this.moviesService.modifyMovie(movieId, form);
    // return {
    //   id: movieId,
    //   ...form,
    // };
  }
}
