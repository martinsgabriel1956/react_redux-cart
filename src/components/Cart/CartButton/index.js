import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/ui';
import { Container, Badge } from './styles';

export function CartButton() {
  const dispatch = useDispatch();

  function handleToggleCart() {
    dispatch(uiActions.toggleCart());
  };

  return (
    <Container onClick={handleToggleCart}>
      <span>My Cart</span>
      <Badge>1</Badge>
    </Container>
  );
};