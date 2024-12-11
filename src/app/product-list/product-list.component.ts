import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products:Product[] = [{
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSK8_BdPpbzhlPqJTQBXUofFwDAyrUceBwTg&s'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    imageUrl: 'https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/402431-smartphones-apple-iphone-12-10016496.png'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A normal phone with a cameras',
    imageUrl: 'https://otrmobile.com/cdn/shop/articles/Smartphone_OTR_Mobile_1.png?v=1682432591&width=1024'
  }

  ];

  addToCart(product: Product) {
    console.log('Product added to cart', product);
    
  }

}
