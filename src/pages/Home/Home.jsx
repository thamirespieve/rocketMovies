import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiPlus } from "react-icons/fi";
import { Container,Content,AddMovie } from "./style";

import { api } from "../../services/api";

import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";


export function Home(){
  const [movies,setMovies] = useState([])
  const [search, setSearch] = useState([])

  const navigate = useNavigate()

  async function fetchAllMovies() {
    const response =  await api.get("/movieNotes")
    
    setMovies(response.data)
  }

  function handleDetails(id){
    navigate(`/moviePreview/${id}`)
  }
 
  useEffect(()=>{

    fetchAllMovies()

  }, [])

  useEffect(()=>{
    async function fetchMovie() {
       const response =  await api.get(`/movieNotes/${search}`)
       const movie = response.data
       
        setMovies(movie)
    }

 if(search.length !=0 )
    fetchMovie()
 else 
    fetchAllMovies()   
  },[search])

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
        { movies.length > 0 ?
          movies.map(movie => 
            <Card 
            onClick = {() => handleDetails(movie.id)}
            key = {movie.id}
            title={movie.title}
            description= {movie.description}
            tags={movie.tags.length > 0 ? movie.tags.map(tag => tag.name):["Sem marcador"]}/>
          ) : "Não há filmes cadastrados"
        }
      
      </Content>
     
    </Container>
  )
}