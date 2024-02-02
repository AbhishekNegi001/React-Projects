import { useContext } from "react";
import UserContext from "../../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext)
    
    if(!user) return <div>Login Please</div>;

    return (
        <div style={{backgroundColor : 'gray'}}>
        <h1>User Info</h1>
        <div>
            Username : {user.username}<br/>
            Password : {user.password}<br/>
        </div>
        </div>
    )

}
export default Profile;