import { useParams } from "react-router-dom"
export default function User(){
    const {userid} = useParams()
    return(
        <div  className=" bg-blue-400 w-full text-center text-xl text-white">
            User : {userid}
        </div>
    )
}