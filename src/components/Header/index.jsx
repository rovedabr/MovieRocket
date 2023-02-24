import { Container } from "./styles";
import { Input } from "../Input"

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input type="text" placeholder="Pesquisar pelo título" />
      <div>
        <div id="name">
          <strong>Ivan Roveda</strong>
          <a href="#">Sair</a>
        </div>
        <img src="https://www.github.com/rovedabr.png" alt="" />
      </div>
    </Container>
  )
}