import {useState} from 'react'
import './Login.css'


function Login({onLoginSuccess}){
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    

    async function handleSubmit(){
        try{
            const response = await fetch(`${import.meta.env.VITE_API_URL}/login`,{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username,password})
            })
            const data = await response.json();
            if (!response.ok){
                setError(data.message);
                return
            }
            localStorage.setItem('token', data.token);
            onLoginSuccess(data.user.username);

        } catch (err){
            setError("Server error please try again")
            console.log('Login error ', err);
        }


    }


    return(
        <div className="auth-container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type = "text"
                        placeholder='Enter username'
                        value={username}
                        onChange={e=> {setUsername(e.target.value);
                            setError("")
                        }}                    
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type = "password"
                        placeholder='Enter Password'
                        value={password}
                        onChange={e=> {setPassword(e.target.value);
                            setError("")
                        }}                    
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
