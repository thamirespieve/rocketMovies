import { Routes,Route } from "react-router-dom"

import { Home } from "../pages/Home/Home"
import { Profile } from "../pages/Profile/Profile"
import { New } from "../pages/New/New"
import { Preview } from "../pages/Preview/Preview"

export function AppRoutes(){

  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/newMovie" element={<New/>}/>
      <Route path="/moviePreview" element={<Preview/>}/>
    </Routes>
  )

}