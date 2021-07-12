import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Cart } from '../../components/Cart';
import { Layout } from '../../components/Layout';
import { Products } from '../../components/Shop/Products';

export function Home() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch('https://react-redux-cart-20c97-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });

  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}