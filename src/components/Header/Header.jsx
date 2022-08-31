import {FiSearch} from "react-icons/fi"

import { Container } from "./style";
import {Input} from "../Input/Input"
export function Header (){

  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input type="text" placeholder="Pesquisar pelo título" icon={FiSearch }/>

      <main>
        <div>
          <h2>Thamires Pieve</h2>
          <p>Sair</p>
        </div>
        <img src="https://github.com/thamirespieve.png" alt="Imagem de usuário do github" />
      </main>
    </Container>
  )
}