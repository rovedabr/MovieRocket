import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi"
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";


export default function SignIn() {
  return (
    <Container>
      <Background/>

      <Form>

          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <span>Crie sua conta</span>

        <Input 
          icon={FiUser}
          type="text"
          placeholder="Nome"
        />

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
          title="Cadastrar"
        />

        <TextButton 
        icon={FiArrowLeft}
        title="Voltar para o login"/>
      
      </Form>


    </Container>
  )
}