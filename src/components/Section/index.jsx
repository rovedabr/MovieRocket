import { Container, StarsRate } from "./styles";
import { NoteItem } from "../NoteItem";

export function Section({ title, StarsRate, children, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      {StarsRate}
      {children}      
    </Container>
  )
}