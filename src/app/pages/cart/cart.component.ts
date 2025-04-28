import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  private cartService = inject(CartService);

  cart = computed(() => this.cartService.cartItems());

  total = computed(() =>
    this.cart().reduce((sum, item) => {
      const price = item.product.discountPrice ?? item.product.price;
      return sum + item.quantity * price;
    }, 0)
  );

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  totalBeforeDiscount = computed(() =>
    this.cart().reduce((sum, item) => {
      return sum + item.quantity * item.product.price;
    }, 0)
  );
  
  totalAfterDiscount = computed(() =>
    this.cart().reduce((sum, item) => {
      const price = item.product.discountPrice ?? item.product.price;
      return sum + item.quantity * price;
    }, 0)
  );
  

  
}
