import { Container } from "./styles";

import { ProductItem } from "../ProductItem";

const DUMMY_PRODUCT = [
  {
    id: "b1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "b2",
    price: 7,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
  {
    id: "b3",
    price: 9,
    title: "My Third Book",
    description: "The third book I ever wrote",
  },
];

export function Products() {
  return (
    <Container>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(({ title, price, description, id }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
          />
        ))}
      </ul>
    </Container>
  );
}
