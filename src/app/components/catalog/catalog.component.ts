import { Component } from '@angular/core';
import { Product } from '../product-card/product-card.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  selectedCategory: string = 'all';

  products: Product[] = [
    {
      id: 1,
      name: 'Large Cyclops',
      description: 'A robot head with an unusually large eye and telescopic neck.',
      price: 1220.50,
      discountPrice: 976.40,
      category: 'heads',
      imageUrl: 'assets/images/cyclops.png'
    },
    {
      id: 2,
      name: 'Spring Base',
      description: 'A spring base — great for reaching high places.',
      price: 1190.50,
      category: 'bases',
      imageUrl: 'assets/images/spring-base.png'
    },
    {
      id: 3,
      name: 'Articulated Arm',
      description: 'An articulated arm with a claw — great for tight spaces.',
      price: 275.00,
      category: 'arms',
      imageUrl: 'assets/images/arm.png'
    }
  ];

  constructor(private cartService: CartService) {}

  filteredProducts(): Product[] {
    if (this.selectedCategory === 'all') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
