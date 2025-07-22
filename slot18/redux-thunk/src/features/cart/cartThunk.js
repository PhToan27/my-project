import { setProducts } from './cartSlice';

export const fetchProducts = () => async (dispatch) => {
  // Giả lập API
  const data = [
    {
      id: '123456',
      name: 'Example Product',
      price: 9.99,
      description: 'This is an example product.',
      catalogs: ['catalog1', 'catalog2'],
    },
  ];
  // delay giả
  await new Promise(resolve => setTimeout(resolve, 500));
  dispatch(setProducts(data));
};
