import SignUp from "./pages/SignUp"



function App(){
  return (
    <div>
      <h1>AI 4 Ram</h1>
      <SignUp />
    </div>
  )
}

export default App



// import { useState } from 'react'

// function validateUsername(username){
    
//     const usernameTrimmed = username.trim().toUpperCase()
//     if(usernameTrimmed.length < 4 || usernameTrimmed.length > 20)
//         return "Username must be 4–20 characters";
//     return null
// }


// function App() {
//   const [username, setUsername] = useState("")
//   const [error, setError] = useState("")

//   function handleChange(e){
//     const value = e.target.value;
//     setUsername(value);
//     const result = validateUsername(value)
//     setError(result)
//     console.log(e)
//   }

//   return (
//     <div>
//       <h1>AI4Ram</h1>
//       <p>Sign Up Page!</p>
//       <input
//         type="text"
//         placeholder="Enter Username"
//         value={username}
//         onChange={handleChange}
//       />
//       {/* <p>You typed : {username}</p> */}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <p>Username: {username.toUpperCase()}</p>


//     </div>
//   )
// }

// export default App
