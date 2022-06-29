import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';

import { Product } from './product.model';

const products = [
  { title: '商品1', price: 100 },
  { title: '商品2', price: 200 },
];

// const p1 = new Product('商品1', 100);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
