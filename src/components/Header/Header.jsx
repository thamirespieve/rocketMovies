import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";


import { Container,Profile } from "./style";

export function Header ({value, onChange,...rest}){

  const {singOut} = useAuth()
  const navigate = useNavigate()


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
            <h2 onClick={hadleProfile}>Thamires Pieve</h2>
            <button onClick={handleSingOut} >Sair</button>
          </div>
          <img src="https://github.com/thamirespieve.png" alt="Imagem de usuário do github" onClick={hadleProfile} />
        </main>
      </Profile>
    </Container>
  )
}