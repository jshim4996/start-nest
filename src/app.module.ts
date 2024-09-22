import { Module } from '@nestjs/common';
import { MoviesService } from './movies/movies.service';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
