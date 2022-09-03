import { Container, Form} from "./styled";
import { Link } from "react-router-dom"; 

import {Header} from "../../components/Header/Header"
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input/Input";
import {Button} from "../../components/Button/Button"
import {Tag} from "../../components/Tag/Tag"

export function New(){

  return(<>
      <Header/>
    <Container>
      <Link to="/"><FiArrowLeft/>Voltar</Link>
      <Form>
        <h1>Novo Filme</h1>

        <div>
          <Input type = "text" placeholder="Título"/>
          <Input type = "text" placeholder="Sua nota (de 0 à 5)"/>
        </div>

        <textarea placeholder="Observações"></textarea>

        <h2>Marcadores</h2>
        <section>

        <Tag title = "React" />
        <Tag isNew title="Novo marcador"/>
        </section>

        <div className="buttons">
          <Button title="Excluir filme" className="deleteButton" />
          <Button title="Salvar Alteração" />
        </div>
      </Form>

    </Container>
  </>
  )

}