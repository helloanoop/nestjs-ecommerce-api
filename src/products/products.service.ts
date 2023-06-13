import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService {
  getAllProducts() {
    return [{
      id: 1,
      name: 'Realme 5'
    }]
  }
}