import { useDispatch } from 'react-redux';

import { Container, Price, Actions } from "./styles";

import { Card } from "../../UI/Card";
import { cartActions } from '../../../store/cart';

export function ProductItem(props) {
  const { title, price, description, id} = props;

  const dispatch = useDispatch();

  function handleAddToCard() {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
      })
    );    
  };

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
