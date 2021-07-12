import { Container } from './styles';

export function Card({children, ...props}) {
  return (
    <Container {...props} className={`${props.className} ? ${props.className} : ''`}>
      {children}
    </Container>
  );
};