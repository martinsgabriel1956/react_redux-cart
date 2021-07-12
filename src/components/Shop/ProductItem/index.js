import { Container, Price, Actions } from "./styles";

import { Card } from "../../UI/Card";

export function ProductItem(props) {
  const { title, price, description } = props;

  return (
    <Container>
      <Card>
        <header>
          <h3>{title}</h3>
          <Price>${price.toFixed(2)}</Price>
        </header>
        <p>{description}</p>
        <Actions>
          <button>Add to Cart</button>
        </Actions>
      </Card>
    </Container>
  );
}
