import {useState} from 'react'
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard  from "./pages/Dashboard"




function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  function handleLoginSuccess(username){
    setIsLoggedIn(true);
    setLoggedInUser(username)
  }

  function handleLogout(){
    setIsLoggedIn(false);
    setLoggedInUser("")
  }

  if (isLoggedIn){
    return(
      <div>
        <Dashboard username={loggedInUser} />
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }
  return(
    <div>
      <h1>AI4Ram</h1>
      <SignUp />
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  )

}

export default App

