import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/data/data.service';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data: DataService) { }
  productData: IProduct;

  ngOnInit() {
    this.route.paramMap.pipe(
      tap((params: ParamMap) => {
        (this.productData as any) = this.data.getProductByTitleAndCat(params.get('catId'), params.get('title'));
      })
    ).subscribe();
  }

}
