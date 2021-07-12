import { Cart } from '../../components/Cart';
import { Layout } from '../../components/Layout';
import { Products } from '../../components/Shop/Products';

export function Home() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}