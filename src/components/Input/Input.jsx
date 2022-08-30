import { Container } from "./style";

export function Input({placeholder,type,icon:Icon, ...rest}){

  return(
    <Container >
      <Icon/>

      <input type={type} placeholder={placeholder} {...rest} />
    </Container>
  )
}