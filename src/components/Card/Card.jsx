import { Container } from "./style";


export function Card({title,description,tags}){

  return(
    <Container>
      <h1>{title}</h1>
      <div>★ ★ ★ ★ ☆</div>
      <p>{description} </p>
   
      {tags.map(tag=><span>{tag}</span>)}
      
    </Container>
  )
}