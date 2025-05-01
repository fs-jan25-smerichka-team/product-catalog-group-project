import { CartItem, CartStorageItem, ProductCardInfo } from '../Types';

export const buildCartItems = (
  cartStorage: CartStorageItem[],
  allProducts: ProductCardInfo[] | undefined,
): CartItem[] => {
  if (!allProducts) return [];

  return cartStorage
    .map(({ id, quantity }) => {
      const product = allProducts.find(p => p.itemId === id);
      if (!product) return null;

      return {
        id: product.itemId,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity,
      };
    })
    .filter(Boolean) as CartItem[];
};
