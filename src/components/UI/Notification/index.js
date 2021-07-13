import { Container } from './styles';

export function Notification({ title, message }, ...props) {
  return (
    <Container className={props.status === 'error' ? 'error' : 'success'} >
      <h2>{title}</h2>
      <p>{message}</p>
    </Container>
  );
};

