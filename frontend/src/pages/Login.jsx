import {useState} from 'react'
import './Login.css'

const users = [
    { username: "RAM1", email: "ram@email.com", password: "Password1", isLoggedIn: false },
    { username: "JOHN1", email: "john@email.com", password: "Password1", isLoggedIn: false },
];

function Login(){
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleSubmit(){

        // find a user by username
        const found = users.find(function(user){
            return user.username === username.trim().toUpperCase();
        })

        //check if user exists and password matches

        if (!found || found.password !== password){
            setError("Invalid username or password")
            return
        }
        
        // Success
        setError("");
        setIsLoggedIn(true);
        console.log("Logged in " + found);

    }

    if (isLoggedIn){
        return(
             <div className="login-container">
                <h2>Welcome back, {username.toUpperCase()}! 👋</h2>
                <p>You are now logged in.</p>
                <button
                    className="login-btn"
                    onClick={() => setIsLoggedIn(false)}
                >
                    Logout
                </button>
            </div>
        );
    }

    return(
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type = "text"
                        placeholder='Enter username'
                        value={username}
                        onChange={e=> setUsername(e.target.value)}                    
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type = "password"
                        placeholder='Enter Password'
                        value={password}
                        onChange={e=> setPassword(e.target.value)}                    
                    />
                </div>

                {error && <p className="error-text"> {error} </p>}

                <button 
                    className="login-btn"
                    type='button'
                    onClick={handleSubmit}
                    disabled = {!username || !password}
                
                >Login</button>

            </form>

        </div>
    );
}

export default Login
