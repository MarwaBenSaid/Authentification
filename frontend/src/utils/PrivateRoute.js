import { Route, Routes , Navigate} from "react-router-dom"
import Login from "../pages/Login";

 const PrivateRoute = ({children , ...rest}) => {
  const authenticated = false 
    return (
    <Routes>
  
      <Route path="/login" element={authenticated ? <Navigate to="/hello" /> : Login}/>
    </Routes>
  )
}
export default PrivateRoute;
