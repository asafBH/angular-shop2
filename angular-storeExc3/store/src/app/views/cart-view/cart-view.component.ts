import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data/data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router, public cart: CartService) {
  }
  
  ngOnInit() {
  }
}


