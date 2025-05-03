type Description = {
  title: string;
  text: string[];
};

export type SortBy = 'Newest' | 'Alphabetically' | 'Cheapest';
export type PerPage = 'All' | '16' | '8' | '4';

export type ProductCardInfo = {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
};

export type ProductCategoryType = 'phones' | 'tablets' | 'accessories';

export type ProductDetailsInfo = {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell: string[];
};

export type CartItem = {
  id: string;
  category: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export type CartStorageItem = {
  id: string;
  quantity: number;
};

export type NewProductOptions = {
  color?: string;
  capacity?: string;
};

export type MemberInfo = {
  name: string;
  photo: string;
  about: string;
  responsibleFor: string[];
  contacts: { label: string; href: string }[];
};
