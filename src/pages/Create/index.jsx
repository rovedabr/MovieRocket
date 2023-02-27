import { Container, Form, DataMovie, TextSection, Marker, DeleteButton, ButtonArea } from "./styles";
import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton"
import { FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";


export default function Create() {
  return (
    <Container>
      
      <Header/>

      <Form >
          <TextButton to="/"
            icon={FiArrowLeft}
            title="Voltar"
          />

        <h1>Novo Filme</h1>
        
        <DataMovie>
          <Input
            placeholder="Título"
          />
          <Input
            placeholder="Sua nota (de 0a 5)"
          />
        </DataMovie>

        <TextArea
          placeholder="Observações"
        />

        <Marker>
          <h1>Marcadores</h1>
           
        </Marker>

        <ButtonArea>
          <DeleteButton>Excluir</DeleteButton>
          <Button title="Salvar alterações"/>
        </ButtonArea>


      </Form>
    </Container>
    
  )
}