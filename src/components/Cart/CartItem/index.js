import { useDispatch } from 'react-redux';

import { Container, Details, Price, Quantity, Actions } from './styles';

import { cartActions } from '../../../store/cart';

export function CartItem(props) {
  const {title, quantity, total, price, id} = props.item;

  const dispatch = useDispatch();

  function handleAddItem() {
    dispatch(cartActions.addItem({
      id,
      title,
      price
    }));
  };
  
  function handleRemoveItem() {
    dispatch(cartActions.removeItem());
  };

  return (
    <Container>
      <header>
        <h3>{title}</h3>
        <Price>
          ${total.toFixed(2)}
          <span>(${price.toFixed(2)}/item)</span>
        </Price>
      </header>
        <Details>
          <Quantity>
            X <span>{quantity}</span>
          </Quantity>
          <Actions>
            <button onClick={handleRemoveItem}> - </button>
            <button onClick={handleAddItem}> + </button>
          </Actions>
        </Details>
    </Container>
  );
};