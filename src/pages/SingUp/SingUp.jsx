import {Link} from "react-router-dom"
import { Container,Form,BackgroundImage } from "./style";
import {FiUser,FiMail,FiLock,FiArrowLeft} from "react-icons/fi"

import { Input } from "../../components/Input/input";
import { Button } from "../../components/Button/Button";

export function SingUp(){

  return(
    <Container>
      <BackgroundImage/>
      <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Crie sua conta</h2>

          <Input placeholder="Nome" type="text" icon={FiUser}/>
          <Input placeholder="E-mail" type="email" icon={FiMail}/>
          <Input placeholder="Senha" type="password" icon={FiLock}/>

          <Button type="button" title="Cadastrar"/>

          <Link to="/"><FiArrowLeft/> Voltar para o login</Link>
      </Form>
    </Container>
  )

}