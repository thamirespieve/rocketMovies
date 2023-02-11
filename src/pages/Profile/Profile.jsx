import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { FiArrowLeft,FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container,Avatar,Form } from "./style";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import {Input} from "../../components/Input/Input"
import {Button} from "../../components/Button/Button"
import { api } from "../../services/api";

export function Profile(){

  const {user, updateProfile} = useAuth()
  const avatarURL = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` :avatarPlaceholder
  
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState() 
  const [passwordNew, setPasswordNew] = useState()
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  function handleChangeAvatar(event) {
    const file = event.target.files[0]

    setAvatarFile(file)

    const imageProview = URL.createObjectURL(file)

    setAvatar(imageProview)

  }

  async function handleUpdate(event){

  event.preventDefault()
  
  const updated = {
    name,
    email, 
    password: passwordNew, 
    old_password: passwordOld
  }
  
  const userUpdated = Object.assign(user,updated)

  await updateProfile({user:userUpdated, avatarFile })
}

return(
  <Container>
    <header>
      <FiArrowLeft/>
      <Link to="/">Voltar</Link>
    </header>

    <Form>
      <Avatar>
        <img src= {avatar} alt="Imagem de usuário" />
        <label htmlFor="avatar">
          <FiCamera />
          <input id="avatar"
          onChange={handleChangeAvatar}
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