import { Controller, Delete, Put, Get, Param, Post, Body, HttpCode, HttpStatus, Header } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';
import { Product } from "./scheemas/product.schema";


@Controller('products')
export class ProductsController {

  constructor(private productService: ProductService) {

  }
  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-COntrol', 'none')
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productService.remove(id);
  }
  
  @Put(':id')
  update(@Body() UpdateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
    return this.productService.update(id, UpdateProductDto)
  }

}
