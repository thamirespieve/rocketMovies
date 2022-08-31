import {Link} from "react-router-dom"
import {FiMail,FiLock} from "react-icons/fi"

import { Container, Form, ImageBackground } from "./style";
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
          <Link to="register">Criar conta</Link>
        </Form>

        <ImageBackground/>
    </Container>

  )
}