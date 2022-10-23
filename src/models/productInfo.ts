export interface Image {
  url: string;
  publicId: string;
  _id: string;
}

export interface Asset {
  url: string;
  publicId: string;
  _id: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
}

export interface Creator {
  _id: string;
  name: string;
}

export interface Review {
  _id: string;
  content: string;
  rating: number;
  creator: Creator;
  product: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  image: Image;
  price: number;
  assets: Asset[];
  categories: Category[];
  colors: any[];
  storage: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  reviews: Review[];
  id: string;
}

export interface Data {
  product: Product;
}

export interface RootObject {
  status: string;
  data: Data;
}
