import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

import { TopPage as TopPageDto } from './model';

import { FindTopPageDto } from './dto';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: TopPageDto) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageDto) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {}
}
