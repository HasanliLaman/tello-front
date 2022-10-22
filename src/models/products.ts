declare module namespace {
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

  export interface Product {
    _id: string;
    name: string;
    description: string;
    image: Image;
    price: number;
    assets: Asset[];
    categories: Category[];
    colors: string[];
    storage: string[];
    createdAt: Date;
    updatedAt: Date;
    id: string;
  }

  export interface Data {
    products: Product[];
  }

  export interface RootObject {
    status: string;
    length: number;
    data: Data;
  }
}

export default namespace;
