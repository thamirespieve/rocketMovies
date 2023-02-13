import { useEffect, useState } from "react";

import { FiPlus } from "react-icons/fi";
import { Container,Content,AddMovie } from "./style";

import { api } from "../../services/api";

import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";


export function Home(){
  const [movies,setMovies] = useState([])
  const [search, setSearch] = useState([])

  useEffect(()=>{

    async function fetchAllMovies() {
      const response =  await api.get("/movieNotes")
      
      setMovies(response.data)
    }


    fetchAllMovies()

  }, [])

  return(
    <Container>
      <Header 
          value= {search} 
          onChange = {(event) => setSearch(event.target.value)}  />
      <Content>
        <header>
        
          <h1>Meus filmes</h1>
          <AddMovie to="/newMovie"><FiPlus/>Adicionar filme</AddMovie>
        </header>
        {
          movies.map(movie => 
            <Card 
            key = {movie.id}
            title={movie.title}
            description= {movie.description}
            tags={movie.tags.length > 0 ? movie.tags.map(tag => tag.name):"Sem marcador"}/>
          )
        }
      
      </Content>
     
    </Container>
  )
}