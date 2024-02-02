//import { useState } from "react";
//import { useEffect } from "react";
import { useLoaderData } from 'react-router-dom'

function GitHub(){
    /*
    const [data, setData] = useState([])
    const url='https://api.github.com/users/AbhishekNegi001'

    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setData(data);
        })
    },[])
*/
    // useLoaderData gives the data from loader property of <Route loader = {}>
    const data = useLoaderData()
    return (
        <div className="m-4 p-4 text-3xl bg-gray-700 text-white flex ">
            <img src={data.avatar_url} alt="Picture Not Found" width={300}/>
            <div className="m-5 w-1/2">
                Username : {data.login}<br/>
                Github Followers : {data.followers}<br/>
                Public Repositories : {data.public_repos}
            </div>
        </div>
    )
}

export default GitHub;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/AbhishekNegi001')
    return response.json()
}