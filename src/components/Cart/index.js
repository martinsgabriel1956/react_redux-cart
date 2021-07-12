import { Container } from './styles';
import { CartItem } from './CartItem';

export function Cart(props) {
  return (
    <Container>
      <h2>Your Shopping Cart</h2>
      <ul>
          <CartItem 
            item={{
              title: 'Test Item',
              quantity: 3,
              total: 18,
              price: 6
            }}
          />
      </ul>
    </Container>
  );
};