import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductService } from "./product.service";
import { ProductsController } from "./products.controller";
import { Product, ProductSchema } from "./scheemas/product.schema";

@Module({
  providers: [ProductService],
  controllers: [ProductsController],
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: ProductSchema}
    ])
  ]
})
export class ProductModule {

}