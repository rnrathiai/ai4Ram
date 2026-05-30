import {useState} from 'react'
import './SignUp.css'


function validateEmail(email){

    if (email === ""){
        return "Email is empty"
    }
    if (!email.includes("@")){
        return "Email does not have @ symbol"
    }
    if (email.startsWith('@')){
        return "no username before @"
    }
    if (email.includes("@.")){
        return "dot after @"
    }
    if (email.endsWith('.')){
        return "dot at the end"
    }
    if (!email.split("@")[1].includes(".")){
        return "Email need to have dot"
    }
    return null

}

function validatePassword(password) {
    if (password.length < 8) {
        return "Too short — minimum 8 characters";
    }
    if (!/\d/.test(password)) {
        return "Must contain at least one number";
    }
    return null;
}


function validateUsername(username){
    
    const usernameTrimmed = username.trim().toUpperCase()
    if(usernameTrimmed.length < 4 || usernameTrimmed.length > 20)
        return "Username must be 4–20 characters";
    return null
}



function SignUp(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    function handleUsernameChange(e){
        const value = e.target.value;
        setUsername(value);
        setErrors(prev => ({...prev, username: validateUsername(value)}));
    }
    function handleEmailChange(e){
        const value = e.target.value;
        setEmail(value);
        setErrors( prev =>({...prev, email: validateEmail(value)}));

    }
    function handlePasswordChange(e){
        const value = e.target.value;
        setPassword(value)
        setErrors(prev=>({...prev, password: validatePassword(value)}))

    }

    const isFormValid = !errors.username && !errors.email && !errors.password && 
        username !== "" && email !== "" && password !== "";

    function handleSubmit(){
        console.log("Successfull Sign up: ", {username, email, password});
        alert("Sign up Successfull : Welcome " + username.toUpperCase() );
    }


    return (
        <div>
            <h2>Create Account</h2>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>

                <button
                    className="signup-btn"
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                >
                    Sign Up
                </button>
            </form>
        </div>       
    )

}

export default SignUp