import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../components/product-card/product-card.component';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _cart = signal<{ product: Product; quantity: number }[]>([]);

  cartItems = this._cart.asReadonly();

  cartCount = computed(() =>
    this._cart().reduce((total, item) => total + item.quantity, 0)
  );

  addToCart(product: Product) {
    const current = this._cart();
    const index = current.findIndex(p => p.product.id === product.id);

    if (index > -1) {
      current[index].quantity += 1;
    } else {
      current.push({ product, quantity: 1 });
    }

    this._cart.set([...current]);
  }

  removeFromCart(productId: number) {
    const filtered = this._cart().filter(item => item.product.id !== productId);
    this._cart.set(filtered);
  }

  getTotal(): number {
    return this._cart().reduce((sum, item) => {
      const price = item.product.discountPrice ?? item.product.price;
      return sum + item.quantity * price;
    }, 0);
  }

  
}
