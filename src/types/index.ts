export interface MenuItem {
  name: string;
  img: string;
  price: number;
  category: string;
}

export interface CartItem extends MenuItem {
  qty: number;
}
