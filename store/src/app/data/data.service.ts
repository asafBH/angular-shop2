import { Injectable } from '@angular/core';
import { productsData } from './products-data';

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
}
