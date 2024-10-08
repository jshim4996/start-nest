import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('return all array', () => {
      const result = service.getAllMovie();

      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOneMovie', () => {
    it('return movie', () => {
      service.createMovie({
        title: 'test Movie',
        year: 2024,
        genres: ['test'],
      });

      const result = service.getOneMovie(1);
      expect(result).toBeDefined();
      expect(result.id).toEqual(1);
    });

    it('return error', () => {
      try {
        service.getOneMovie(999);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual('999 의 영화를 찾을수 없습니다.');
      }
    });
  });

  describe('deleteMovie', () => {
    it('delete success', () => {
      service.createMovie({
        title: 'test Movie',
        year: 2024,
        genres: ['test'],
      });
      service.deleteMovie(1);
      const result = service.getAllMovie();
      const movie = result.find((result) => result.id === 1);
      expect(movie).toBeUndefined();
    });

    it('delete error', () => {
      try {
        service.deleteMovie(0);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('createMovie', () => {
    it('create success', () => {
      service.createMovie({
        title: 'test Movie',
        year: 2024,
        genres: ['test'],
      });
      const result = service.getAllMovie();
      const movie = result.find((result) => result.title === 'test Movie');
      expect(movie).toBeDefined();
    });
  });

  describe('modifyMovie', () => {
    it('modify success', () => {
      service.createMovie({
        title: 'test Movie',
        year: 2024,
        genres: ['test'],
      });
      service.modifyMovie(1, { title: 'Update Movie' });
      const result = service.getOneMovie(1);
      expect(result.title).toEqual('Update Movie');
    });

    it('modify error', () => {
      try {
        service.deleteMovie(0);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  //it 개별 테스트 를 의미함
  // it('shuld be 4', () => {
  // expect : 테스트 할 기능
  // toEqual : 값이 같은지 확인
  // expect(2 + 2).toEqual(4);
  // });
});
