import { useSelector } from 'react-redux';
import { Cart } from '../../components/Cart';
import { Layout } from '../../components/Layout';
import { Products } from '../../components/Shop/Products';

export function Home() {
  const showCart = useSelector(state => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}