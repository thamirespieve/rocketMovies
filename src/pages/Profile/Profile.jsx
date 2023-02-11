import { Link } from "react-router-dom";
import { Container,Avatar,Form } from "./style";
import { FiArrowLeft,FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import {Input} from "../../components/Input/Input"
import {Button} from "../../components/Button/Button"
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
export function Profile(){

  const {user, updateProfile} = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState() 
  const [passwordNew, setPasswordNew] = useState()


 async function handleUpdate(event){
  event.preventDefault()
  const user = {name,email, password: passwordNew, old_password: passwordOld}
  
  await updateProfile({user})
}

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

      <Input 
       type = "text"
       placeholder="Usuário"
       icon={FiUser} 
       value = {name} 
       onChange = {(event)=> setName(event.target.value)} />

      <Input 
       type = "email" 
       placeholder="E-mail" 
       icon={FiMail} 
       value = {email} 
       onChange = {(event)=> setEmail(event.target.value)}  />

      <Input 
       type = "password" 
       placeholder="Senha atual" 
       icon={FiLock} 
       onChange = {(event)=>setPasswordOld(event.target.value)}  />
       
      <Input 
       type = "password" 
       placeholder="Nova senha" 
       icon={FiLock}  
       onChange = {(event)=>setPasswordNew(event.target.value)} />

      <Button title="Salvar" onClick = {handleUpdate}  />
    </Form>

  </Container>
)

}