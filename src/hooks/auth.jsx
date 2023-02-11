import { useEffect } from "react";
import { useContext, createContext,useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({})


function AuthProvider({children}){
  const [data, setData] = useState({})

  async function singIn ({email,password}){
  try {
    console.log(email,password)
    const response = await api.post('/sessions',{email,password})
    const {user, token} = response.data

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    localStorage.setItem("RocketMovies@user",JSON.stringify(user))
    localStorage.setItem("RocketMovies@token",token)

    setData({user,token})
  } catch (error) {
    
    if(error.response){
      alert(error.response.data.message)
    } else{
      alert('Não foi possível efetuar o login.')
    }

  }


  }

  function singOut() {
  
    localStorage.removeItem("RocketMovies@token")
    localStorage.removeItem("RocketMovies@user")

    setData({})
  }

  async function updateProfile({user,avatarFile}) {
    try {

      if(avatarFile){
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar",avatarFile)

        const response = await api.patch("user/avatar",fileUploadForm)
        user.avatar = response.data.avatar
        
      }

       await api.put('/user',user)

       localStorage.setItem("RocketMovies@user",JSON.stringify(user))
       setData({user, token:data.token})

       alert("Perfil atualizado com sucesso.")
     } catch (error) {
      
       if(error.response){
         alert(error.response.data.message)
       } else{
         alert('Não foi possível atuaizar as informações do perfil.')
       }

     }
  }

  useEffect(()=>{
    const token = localStorage.getItem("RocketMovies@token")
    const user = localStorage.getItem("RocketMovies@user")

    if(user && token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      
      setData({user: JSON.parse(user),token})
    }

  },[])

  return(
    <AuthContext.Provider value={{singIn, singOut, user:data.user, updateProfile}}>
      {children}
    </AuthContext.Provider>
  )

}

function useAuth(){

  const context = useContext(AuthContext)

  return context

}

export {AuthProvider,useAuth}