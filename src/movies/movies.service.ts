import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './movie/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovie(): Movie[] {
    return this.movies;
  }

  getFindMovie(id: string): Movie[] {
    return this.movies.filter((movie) => movie.id === +id);
  }

  getOneMovie(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) throw new NotFoundException(`${id} 의 영화를 찾을수 없습니다.`);
    return movie;
  }

  deleteMovie(id: string) {
    this.getOneMovie(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  createMovie(form) {
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
