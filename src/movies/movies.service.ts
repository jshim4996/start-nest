import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './movie/movie.entity';
import { CreateMovieDto } from './dto/create_movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovie(): Movie[] {
    return this.movies;
  }

  getFindMovie(id: number): Movie[] {
    return this.movies.filter((movie) => movie.id === id);
  }

  getOneMovie(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) throw new NotFoundException(`${id} 의 영화를 찾을수 없습니다.`);
    return movie;
  }

  deleteMovie(id: number) {
    this.getOneMovie(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  createMovie(form: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...form,
    });
  }

  modifyMovie(id, form) {
    const movie = this.getOneMovie(id);
    this.deleteMovie(id);
    this.movies.push({
      ...movie,
      ...form,
    });
  }
}
