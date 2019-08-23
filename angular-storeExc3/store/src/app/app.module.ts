import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { SiblingComunicService } from './services/sibling-comunic.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './views/products/products.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { MatCardModule } from '@angular/material/card';
import { ProductComponent } from './components/product/product.component';
import { ShortDescPipe } from './pipes/short-desc.pipe';
import { DataService } from './data/data.service';
import { CategoriesComponent } from './views/categories/categories.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { CartViewComponent } from './views/cart-view/cart-view.component';
import { CartService } from './services/cart.service';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    ShortDescPipe,
    CategoriesComponent,
    ProductViewComponent,
    SocialLinksComponent,
    CartViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatCardModule,
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatTableModule
  ],
  providers: [SiblingComunicService, DataService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
