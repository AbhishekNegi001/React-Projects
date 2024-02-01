import { useState } from "react";
import { useEffect } from "react";

function GitHub(){
    const [data, setData] = useState([])
    const url='https://api.github.com/users/AbhishekNegi001'
    useEffect(()=>{
        fetch({url})
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            setData(data)
        })
    },[])
    return (
        <div className="text-center m-4 p-4 text-3xl bg-gray-700 text-white">
            <img src="data.avatar_url" alt="Picture Not Found" width={300}/>
            Username            : {data.login}<br/>
            Github Followers    : {data.followers}<br />
            Public Repositories : {data.public_repos}
        </div>
    )
}

export default GitHub;