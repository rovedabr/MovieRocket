import { Container, StarsRate } from "./styles";
import { NoteItem } from "../NoteItem";

export function Section({ title, rate, children, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      <p>{rate}</p>
      {children}      
    </Container>
  )
}