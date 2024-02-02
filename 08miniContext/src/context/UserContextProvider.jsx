//method 1 to handle context api

import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;

/*
eg:-
all the components inside <UserContext will get access to the the global data

<UserContext>
    <Login/>
    <Card>
        <Data/>
    </Card>
</UserContext>
*/