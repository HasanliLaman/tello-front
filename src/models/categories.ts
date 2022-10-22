declare module namespace {
  export interface Subcategory {
    _id: string;
    name: string;
    slug: string;
    subcategories?: any;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  }

  export interface Category {
    _id: string;
    name: string;
    slug: string;
    subcategories: Subcategory[];
    createdAt: Date;
    updatedAt: Date;
  }

  export interface Data {
    categories: Category[];
  }

  export interface RootObject {
    status: string;
    length: number;
    data: Data;
  }
}

export default namespace;
