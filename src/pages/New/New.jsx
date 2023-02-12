import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { FiArrowLeft } from "react-icons/fi";

import { api } from "../../services/api";

import { Container, Form} from "./styled";

import {Header} from "../../components/Header/Header"
import {Button} from "../../components/Button/Button"
import { Input } from "../../components/Input/Input";
import {Tag} from "../../components/Tag/Tag"

export function New(){
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  
  const navigate = useNavigate()

  function handleRemoveTag(deleted) {
    setTags(prevState=>prevState.filter(tag=> tag != deleted))
  }

  function handleAddTag () {

    if(!newTag){
     return alert("É necessário informar a marcação.")
    }

    setTags(prevState => [...prevState,newTag])
    setNewTag("")
  }

  function handleRemoveMovie () {
    setTitle("")
    setNote("")
    setDescription("")
    setTags([])
    setNewTag("")
  }

  async function handleNewNote(event) {
    event.preventDefault()
    if(!title || !note) {
      alert("Campo de título e note são obrigatorios. ")
    } 

    if(newTag){
      return alert("Você informou uma tag e não a adicionou em sua nota. Adicine a tag ou limpe o campo")
    }

    const newMovieNote = {
      title, 
      description,
      rating : note,
      tags
    }

    await api.post("/movieNotes", newMovieNote)

    alert("Avaliação do novo filme cadastrado com sucesso.")
    
    navigate(-1)

  }

  return(<>
    <Header/>
    <Container>
      <Link to="/"><FiArrowLeft/>Voltar</Link>
      <Form>
        <h1>Novo Filme</h1>

        <div>
          <Input type = "text" placeholder="Título" onChange = {(event) => setTitle(event.target.value) }  />
          <Input type = "text" placeholder="Sua nota (de 0 à 5)" onChange = {(event) => setNote(event.target.value) } />
        </div>

        <textarea placeholder="Observações" onChange = {(event) => setDescription(event.target.value) } ></textarea>

        <h2>Marcadores</h2>
        <section>
        <div className="tags">
         { tags.map((tag,index) => 
              <Tag 
              value = {tag} 
              key = {index} 
              onClick = {()=>handleRemoveTag(tag)} />
        )}
          <Tag 
          isNew 
          value= {newTag} 
          onChange = {(event) => setNewTag(event.target.value)} 
          onClick = {handleAddTag} 
          placeholder = "Novo marcador"
          />

        </div>
        </section>

        <div className="buttons">
          <Button title="Excluir filme" className="deleteButton" />
          <Button title="Salvar Alteração" onClick = {handleNewNote} />
        </div>
      </Form>

    </Container>
  </>
  )

}