import { Container } from "./styles";

import { CartButton } from "../../Cart/CartButton";

export function MainHeader(props) {
  return (
    <Container>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </Container>
  );
}
