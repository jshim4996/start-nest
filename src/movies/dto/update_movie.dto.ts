import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create_movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
