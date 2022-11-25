import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


function RoutePrivate() {
  const {email}=useSelector((store)=>store.login)
  
  return (
    email ? <Outlet/>:<Navigate to="/login" />
  )
}

export default RoutePrivate