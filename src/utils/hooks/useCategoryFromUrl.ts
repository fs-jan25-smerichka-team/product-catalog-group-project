import { useLocation } from 'react-router-dom';

import { PRODUCTS_CATEGORIES } from '../../constants/constants';
import { ProductCategoryType } from '../Types';

export const useCategoryFromUrl = () => {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);
  const currentCategory = segments[0] as ProductCategoryType;
  const isValidCategory = PRODUCTS_CATEGORIES.includes(currentCategory);

  return { currentCategory, isValidCategory };
};
