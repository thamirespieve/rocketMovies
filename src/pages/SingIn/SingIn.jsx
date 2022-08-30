import { Container, Form, ImageBackground } from "./style";
import {FiUser,FiMail,FiLock} from "react-icons/fi"
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/input";

export function SingIn(){

  return (
    <Container>
        

        <Form >
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>


          <h2>Faça seu login</h2>

          <Input type="text" placeholder="E-mail" icon={FiMail}/> 
          <Input type="password" placeholder="Senha" icon={FiLock}/> 
          <Button title="Entrar"/>
          <a href="">Criar conta</a>
        </Form>

        <ImageBackground/>
    </Container>

  )
}