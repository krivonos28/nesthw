import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product,ProductDocument } from "./scheemas/product.schema";

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>){}
  private products = []

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return  this.productModel.findById(id)
  }

  async create(productDto: CreateProductDto) {
    const newProduct = new this.productModel(productDto);
    return newProduct.save();
  }

  async remove(id): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  async update (id: string, productDto: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true })
  }
}