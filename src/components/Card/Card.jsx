import { Link } from "react-router-dom";
import { Container } from "./style";


export function Card({title,description,tags}){

  return(
    <Link to="/moviePreview">
      <Container >
        <h1>{title}</h1>
        <div>★ ★ ★ ★ ☆</div>
        <p>{description} </p>
    
        {tags.map(tag=><span>{tag}</span>)}
        
      </Container>
    </Link>
  )
}