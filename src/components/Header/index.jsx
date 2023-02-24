import { Container } from "./styles";
import { Input } from "../Input"
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input type="text" placeholder="Pesquisar pelo título" />
      <div>
        <Link to="/profile:id" id="name">
            <strong>Ivan Roveda</strong>
            <Link href="#">Sair</Link>
        </Link>
        <img src="https://www.github.com/rovedabr.png" alt="" />
      </div>
    </Container>
  )
}