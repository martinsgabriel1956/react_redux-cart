import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/ui';
import { Container, Badge } from './styles';

export function CartButton() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  function handleToggleCart() {
    dispatch(uiActions.toggleCart());
  };

  return (
    <Container onClick={handleToggleCart}>
      <span>My Cart</span>
      <Badge>{cartQuantity}</Badge>
    </Container>
  );
};