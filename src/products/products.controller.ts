import { Controller, Get } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export default class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.getAllProducts();
  }
}
