import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  // dependency injection => 의존성 주입
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
