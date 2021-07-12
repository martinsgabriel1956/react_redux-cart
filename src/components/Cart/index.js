import { useSelector } from "react-redux";

import { Container } from "./styles";
import { CartItem } from "./CartItem";


export function Cart(props) {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Container>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(({ name, quantity, totalPrice, price, id}) => (
          <CartItem
            key={id}
            item={{
              id,
              title: name,
              quantity,
              total: totalPrice,
              price,
            }}
          />
        ))}
      </ul>
    </Container>
  );
}
