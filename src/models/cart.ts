export interface Asset {
  url: string;
  publicId: string;
  _id: string;
}

export interface Image {
  url: string;
  publicId: string;
  _id: string;
}

export interface Product2 {
  _id: string;
  name: string;
  price: number;
  assets: Asset[];
  image: Image;
  id: string;
}

export interface Product {
  product: Product2;
  quantity: number;
  _id: string;
}

export interface RootObjectCart {
  _id: string;
  user: string;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
  totalQuantity: number;
  totalPrice: number;
  id: string;
}
