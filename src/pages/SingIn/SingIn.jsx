import { useState } from "react";
import {Link} from "react-router-dom"
import { useAuth } from "../../hooks/auth";

import {FiMail,FiLock} from "react-icons/fi"

import { Container, Form, ImageBackground } from "./style";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/input";

export function SingIn(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const{singIn} = useAuth()

  function handleSingIn(){

    
    if(!email || !password){
      return alert('Todos os campos devem ser preenchidos.')
    }

    // console.log(email, password)

    singIn({email,password})
  }

  return (
    <Container>
        

        <Form >
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>


          <h2>Faça seu login</h2>

          <Input type="text" placeholder="E-mail" icon={FiMail} onChange = {event => setEmail(event.target.value)} /> 
          <Input type="password" placeholder="Senha" icon={FiLock} onChange = {event => setPassword(event.target.value)} /> 
          <Button title="Entrar" onClick = {handleSingIn} />
          <Link to="register">Criar conta</Link>
        </Form>

        <ImageBackground/>
    </Container>

  )
}