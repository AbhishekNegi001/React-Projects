import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

// sending data
function Login(){
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        // by default when we submit value is sent to somewhere using url or post method
        e.preventDefault(); // to prevent default behaviour of submit button 
        setUser({username,password})
    }
    return(
        <div style={{backgroundColor : 'gray'}}>
            <h1>Please Login</h1>
            <input value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            type="text" placeholder="username"/><br/>
            <input value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password" placeholder="password" /><br/>
            <button style={{backgroundColor: 'blue', margin: 5, padding : 3, paddingLeft: 5, paddingRight: 5}} onClick={handleSubmit}>Submit</button>
            <br/>
        </div>
    );
}
export default Login;