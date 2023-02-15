import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";


import { Container,Profile } from "./style";

export function Header ({value, onChange,...rest}){

  const {singOut,user} = useAuth()
  const navigate = useNavigate()

  const avatarURL = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}`:avatarPlaceholder

  function hadleProfile() {
    navigate("/profile")
  }

  function handleSingOut(){
    navigate("/")
    singOut()
  }

  return(
    <Container>
      <h1>RocketMovies</h1>
      <input 
        type="text" 
        placeholder="Pesquisar pelo título" 
        value = {value} 
        onChange ={onChange} 
        {...rest} />

      <Profile>
        <main>
          <div>
            <h2 onClick={hadleProfile}>{user.name}</h2>
            <button onClick={handleSingOut} >Sair</button>
          </div>
          <img src={avatarURL} alt="Imagem de usuário do github" onClick={hadleProfile} />
        </main>
      </Profile>
    </Container>
  )
}