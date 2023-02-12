import { Container } from "./style";
import { FiPlus,FiX } from "react-icons/fi";

export function Tag({value,isNew,onClick,...rest}){

  return (
  <Container isNew={isNew}>

    <input type="text" value={value}
        readOnly={!isNew} {...rest}/>

    <button type="button" onClick={onClick} className={isNew}>
        {isNew?<FiPlus/>:<FiX/>}
    </button>

  </Container>)
}