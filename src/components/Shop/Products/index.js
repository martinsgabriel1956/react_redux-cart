import { Container } from "./styles";

import { ProductItem } from "../ProductItem";

export function Products() {
  return (
    <Container>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
    </Container>
  );
}
