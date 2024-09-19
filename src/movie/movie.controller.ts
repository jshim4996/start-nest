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

// @Controller('엔트리 포인트)
@Controller('movie')
export class MovieController {
  @Get()
  getAll(): string {
    return 'get Movie';
  }

  @Get('search')
  getSearchMove(@Query('year') searchYear: string) {
    return `해당 ${searchYear} 년도의 영화를 찾아옵니다.`;
  }

  @Get('/:id')
  getOneMovie(@Param('id') moveid: string): string {
    return `해당 ${moveid} 값의 영화를 찾아왔습니다.`;
  }

  //@body 로 body 값을 사용할수 있다.
  @Post()
  getCreate(@Body() form) {
    return form;
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string): string {
    return `해당 ${movieId} 값의 영화를 삭제합니다.`;
  }

  // 전체 수정을 할때는 put
  // 일부분 수정을 할때는 patch
  @Put('/:id')
  modify(@Param('id') movieId: string, @Body() form): string {
    return {
      id: movieId,
      ...form,
    };
  }
}
