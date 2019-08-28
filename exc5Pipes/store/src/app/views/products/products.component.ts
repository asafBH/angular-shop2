import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { IProduct } from 'src/app/models/product';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsList: IProduct [] = [];
  catId: string;

  constructor(public data: DataService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      tap((params: ParamMap) => {
        (this.productsList as any) = this.data.getProductsByCategoryId(params.get('catId'));
        this.catId = params.get('catId');
      })
    ).subscribe();
  }

  goToProduct(product: IProduct){
    this.router.navigate(['product', this.catId, product.Title]);
  }
}
