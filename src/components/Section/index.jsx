import { Container, StarsRate } from "./styles";
import { NoteItem } from "../NoteItem";
import stars from "../../assets/stars.png"

export function Section({ title, rate, children, tag, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      <span>{rate}</span>
      <p>{children}</p>
      <strong>{tag}</strong>      
    </Container>
  )
}