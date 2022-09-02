import { Link } from "react-router-dom";
import { Container,Avatar,Form } from "./style";
import { FiArrowLeft,FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import {Input} from "../../components/Input/Input"
import {Button} from "../../components/Button/Button"
export function Profile(){

return(
  <Container>
    <header>
      <FiArrowLeft/>
      <Link to="/">Voltar</Link>
    </header>

    <Form>
      <Avatar>
        <img src="https://github.com/thamirespieve.png" alt="Imagem de usuário" />
        <label htmlFor="avatar">
          <FiCamera />
          <input id="avatar"
          type="file"/>
        </label>
      </Avatar>

      <Input type = "text" placeholder="Usuário" icon={FiUser}/>
      <Input type = "email" placeholder="E-mail" icon={FiMail}/>
      <Input type = "password" placeholder="Senha atual" icon={FiLock}/>
      <Input type = "password" placeholder="Nova senha" icon={FiLock}/>

      <Button title="Salvar"/>
    </Form>

  </Container>
)

}