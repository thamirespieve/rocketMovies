import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import {FiSearch} from "react-icons/fi"
import { Container,Profile } from "./style";
import {Input} from "../Input/Input"
export function Header (){

  const {singOut} = useAuth()
  const navigate = useNavigate()


  function handleSingOut(){
    navigate("/")
    singOut()
  }

  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input type="text" placeholder="Pesquisar pelo título" icon={FiSearch }/>

      <Profile>
        <main>
          <div>
            <h2>Thamires Pieve</h2>
            <button onClick={handleSingOut} >Sair</button>
          </div>
          <img src="https://github.com/thamirespieve.png" alt="Imagem de usuário do github" />
        </main>
      </Profile>
    </Container>
  )
}