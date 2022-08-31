import { Route,Routes } from "react-router-dom";

import { SingUp } from "../pages/SingUp/SingUp";
import { SingIn } from "../pages/SingIn/SingIn";

export function AuthRoutes(){

  return(
    <Routes>
      <Route path="/" element={<SingIn/>}/>
      <Route path="/register" element={<SingUp/>}/>
    </Routes>
  )
}