import { Container } from "./style";
import { FiPlus,FiX } from "react-icons/fi";

export function Tag({title,isNew}){

  return (<Container>

    <span className={isNew?"button-add":"button-delete"}>
      {title}

      {isNew?<FiPlus/>:<FiX/>}
       
    </span>

  </Container>)
}