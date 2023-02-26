import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import { api }  from '../../services/api'

import { Container,Form,BackgroundImage } from "./style";
import {FiUser,FiMail,FiLock,FiArrowLeft} from "react-icons/fi"

import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export function SingUp(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSingUp () {

    if(!name || !email || !password){
      alert('Todos os campos devem ser preenchidos.')
    }

   await api.post('/user',{name, email, password}).then(()=>{
      alert('Usuário cadastrado com sucesso')
      navigate(-1)
    }).catch((error)=> {
      console.log(error)
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('Desculpe, não foi possível efetuar o cadastro. Tente novamente')
      }
    })
  }

  return(
    <Container>
      <BackgroundImage/>
      <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Crie sua conta</h2>

          <Input placeholder="Nome" type="text" icon={FiUser} onChange = {event => setName(event.target.value)} />
          <Input placeholder="E-mail" type="email" icon={FiMail} onChange = {event => setEmail(event.target.value)} />
          <Input placeholder="Senha" type="password" icon={FiLock} onChange = {event => setPassword(event.target.value)} />

          <Button type="button" title="Cadastrar" onClick = {handleSingUp} />

          <Link to="/"><FiArrowLeft/> Voltar para o login</Link>
      </Form>
    </Container>
  )

}