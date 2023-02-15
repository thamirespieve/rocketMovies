
import { useEffect, useState } from "react";
import { Link, useParams, } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { FiArrowLeft ,FiClock } from "react-icons/fi";
import { Container } from "./style";

import {Header} from "../../components/Header/Header"
import { api } from "../../services/api";

export function Preview(){

  const {user} = useAuth()
  const param = useParams()

  const [data,setData] = useState()
  const [day,setDay] =useState()
  const [hour,setHour] =useState()
  
  const avatarURL = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}`:avatarPlaceholder


  useEffect(()=>{
    async function handleFetch(){
      const response = await api.get(`/movieNotes/preview/${param.id}`)
      const [day,hour] =  response.data[0].update_at.split(" ") 

      setData(response.data)
      setDay(day)
      setHour(hour)
    }
  
    handleFetch()

  },[])

  return(
    <>
    <Header/>
    
  {  data && data.map (movie => (
        
        <Container key={movie.id}>
          <Link to="/"><FiArrowLeft/> Voltar</Link>

          <div className="movieTitle">
            <h1>{movie.title}</h1>
            <span>★ ★ ★ ★ ☆</span>
          </div>

          <div className="infosPreview">

            <span className="user"><img src={avatarURL} alt="Foto de usuário" /> Por {user.name}</span>
            <span className="update"><FiClock/> {day} às {hour} </span>
          </div>

          <div className="tags">
          {movie.tags.map((tag,index)=><span key={index}>{tag.name}</span>)}
          
          </div>

          <p>
            {movie.description}
          </p>

        </Container>
  ))
  }
    </>

  )
}