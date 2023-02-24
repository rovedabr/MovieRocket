import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Container, Avatar, Form } from "./styles"
import { TextButton } from "../../components/TextButton"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export default function Profile() {
  return (
    <Container>
      <header>
        <TextButton
          icon={FiArrowLeft} 
          title="Voltar"
          link="#"
        />
      </header>

      <Avatar>
        <img 
          src="http://www.github.com/rovedabr.png" 
          alt="Imagem do usuário" />
          
        <label htmlFor="avatar">
          <FiCamera/>
        <input
          id="avatar"
          type="file"
          />
        </label>
      </Avatar>

      <Form>
        <Input 
          icon={FiUser}          
          placeholder="Nome"
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
        />
        <Input
          icon={FiLock}
          placeholder="Senha atual"
        />
        <Input
          icon={FiLock}
          placeholder="Nova Senha"
        />
        <Button 
          title="Salvar"
        />
      </Form>      
    </Container>
  )
}