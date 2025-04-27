export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: 'heads' | 'arms' | 'torsos' | 'bases';
  imageUrl: string;
}
