import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { Product as ProductDto } from './model';
import { FindProductDto } from './dto';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: ProductDto) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductDto) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {}
}
