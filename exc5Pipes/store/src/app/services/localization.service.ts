import { Injectable } from '@angular/core';
import { MatSelectChange } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService { 
  currentLang = 'en';
  availableLang = ['en', 'he', 'fr'];

  public menuItem = {
    Home: {
      en: 'Home',
      he: 'בית',
      fr: 'maison'
    },
    About: {
      en: 'About',
      he: 'אודות',
      fr:'À propos'
    },
    Products: {
      en: 'Products',
      he: 'מוצרים',
      fr:'Des produits'
    },
    Contacts:{
      en: 'Contacts',
      he: 'צור קשר',
      fr:'Contacts'
    },
    ShoppingCart:{
      en: 'Shopping Cart',
      he: 'עגלת קניות',
      fr:'Chariot'
    },
    AddProduct:{
      en: 'Add Product',
      he: 'הוספת מוצר',
      fr:'Ajouter un produit'
    },
    LogIn:{
      en: 'Log In',
      he: 'התחברות',
      fr:'Sidentifier'
    },
    LogOut:{
      en: 'Log Out',
      he: 'התנתקות',
      fr:'Connectez - Out'
    }


  };

  constructor() { }


  changeLang(event: MatSelectChange) {
    this.currentLang = event.value;
  }
}
 