import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { ProductsComponent } from './views/products/products.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { CartViewComponent } from './views/cart-view/cart-view.component';


const routes: Routes = [
  {
    path: 'products/:catId',
    component: ProductsComponent,

  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'product/:catId/:title',
    component: ProductViewComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'About' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'Contact' }
  },
  {
    path: 'cart',
    component: CartViewComponent,
    data: { animation: 'Contact' }
  },
  {
    path: '**',
    redirectTo: 'home'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

