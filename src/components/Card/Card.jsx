import { Container } from "./style";

export function Card({title,description,tags,...rest}){

  return(
  
      <Container {...rest} >
        <h1>{title}</h1>
        <div>★ ★ ★ ★ ☆</div>
        <p>{description} </p>
    
        {tags.map((tag,index)=><span key={index}>{tag}</span>)}
        
      </Container>
    
  )
}