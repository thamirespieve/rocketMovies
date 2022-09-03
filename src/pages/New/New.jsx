import { Container } from "./styled";

import {Header} from "../../components/Header/Header"
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input/Input";
import {Button} from "../../components/Button/Button"
import {Tag} from "../../components/Tag/Tag"

export function New(){

  return(
  <Container>
    <Header/>
    <a href="/"><FiArrowLeft/>Voltar</a>
    <form>
      <h1>Novo Filme</h1>

      <div>
        <Input type = "text" placeholder="Título"/>
        <Input type = "text" placeholder="Sua nota (de 0 à 5)"/>
      </div>

      <Input type = "text" placeholder="Observações"/>

      <Tag title = "React" isActive/>
      <Tag/>

      <Button title="Excluir filme" />
      <Button title="Salvar Alteração" />
    </form>

  </Container>
  )

}