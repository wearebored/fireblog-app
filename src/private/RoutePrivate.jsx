import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


function RoutePrivate() {
  const {login}=useSelector((store)=>store.login)
  
  return (
    login ? <Outlet/>:<Navigate to="/login" />
  )
}

export default RoutePrivate