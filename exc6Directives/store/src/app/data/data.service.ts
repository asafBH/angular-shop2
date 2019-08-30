import { Injectable } from '@angular/core';
import { productsData } from './products-data';
import { IProduct, IAddProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProductsByCategoryId(id:string){
    return productsData.category.filter(cat => cat.Id === id)[0].Products;
  }

  getProductByTitleAndCat (id: string, title: string){
    return productsData.category.filter(cat => cat.Id === id)[0].Products.filter(pr => pr.Title === title)[0];
  }

  getCategories(){
    return productsData.category.map(cat => {
      return {
        Id: cat.Id,
        Title: cat.Title
      }
    });
  }

  addProduct(product: IAddProduct) {
    let categoryFound = false;
    productsData.category.forEach((cat, index) => {
      if (cat.Title === product.category) {
        cat.Products.push({
          CategoryId: (index+1).toString(), 
          Image: product.image,
          Title: product.title,
          Price: product.price,
          Description: product.description
        })
        categoryFound = true;
      }
    });

    if (!categoryFound) {
      const newIndex = productsData.category.length + 1;
      productsData.category.push({
        Id: newIndex.toString(),
        Title: product.category,
        Products: [
          {
            CategoryId: newIndex.toString(), 
            Image: product.image,
            Title: product.title,
            Price: product.price,
            Description: product.description
          }
        ]
      })
    }
  }
}
