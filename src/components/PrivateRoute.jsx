import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
import Spinner from "./Spinner"

const PrivateRoute = () => {
//So this will only show the component if the user is logged in or else it will redirect to login screen
//Destructure the useAuthStatus to get the loggedIn and the checkingStatus state 
const { loggedIn, checkingStatus } = useAuthStatus()

//If it is checking for the status show this loading 
if (checkingStatus) {
    return <Spinner/>
}
// if the user is logged in then show the outlet which is the profile page or redirect them to the sign in page
  return loggedIn ? <Outlet/> : <Navigate to='/sign-in'/>
}

export default PrivateRoute
