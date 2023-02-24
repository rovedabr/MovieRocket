import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { FiLock, FiMail } from "react-icons/fi"
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";


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

        <TextButton 
          title="Criar conta"
        />
      
      </Form>

      <Background/>

    </Container>
  )
}