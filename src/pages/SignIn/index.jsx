import { TextButton } from "../../components/TextButton";
import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";
import { FiLock, FiMail } from "react-icons/fi"
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <Container>
      <Form>

          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <span>Faça seu login</span>

        <Input 
          icon={FiMail}
          type="text"
          placeholder="E-mail"
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button
          title="Entrar"
        />

        <Link to="/register">
          <TextButton  title="Criar nota"/>       
        </Link>
        
      </Form>

      <Background/>

    </Container>
  )
}