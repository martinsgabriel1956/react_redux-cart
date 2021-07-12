import { useDispatch, useSelector } from 'react-redux';

import { Container, Price, Actions } from "./styles";

import { Card } from "../../UI/Card";
import { cartActions } from '../../../store/cart';

export function ProductItem(props) {
  const cart = useSelector((state) => state.cart);
  
  const { title, price, description, id} = props;

  const dispatch = useDispatch();

  function handleAddToCard() {
    const newTotalQuantity = cart.totalQuantity + 1;

    const updatedItems = cart.items.slice(); // create copy via slice to avoid mutating original state
    const existingItem = updatedItems.find((item) => item.id === id);
    if (existingItem) {
      const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation
      updatedItem.quantity++;
      updatedItem.totalPrice = updatedItem.totalPrice + price;
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: id,
        price: price,
        quantity: 1,
        totalPrice: price,
        name: title,
      });
  };

  const newCart = {
    totalQuantity: newTotalQuantity,
    items: updatedItems,
  };

  dispatch(cartActions.replaceCart(newCart));
}
  return (
    <Container>
      <Card>
        <header>
          <h3>{title}</h3>
          <Price>${price.toFixed(2)}</Price>
        </header>
        <p>{description}</p>
        <Actions>
          <button onClick={handleAddToCard}>Add to Cart</button>
        </Actions>
      </Card>
    </Container>
  );
}