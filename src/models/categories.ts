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

  export interface Image {
    url: string;
    publicId: string;
  }

  export interface Category {
    _id: string;
    name: string;
    slug: string;
    subcategories: Subcategory[];
    createdAt: Date;
    updatedAt: Date;
    image: Image;
    cover?: boolean;
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
