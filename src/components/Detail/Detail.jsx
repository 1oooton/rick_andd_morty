import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

export default function Detail (){
  
    const params= useParams();
    const [character,setCharacter]=useState({});
    useEffect(()=>{
        const URL_BASE="https://be-a-rym.up.railway.app/api";
        const key="7c80a13bc6b2.f519174d1b55592fd845";
      axios(`${URL_BASE}/character/${params.detailId}?key=${key}`)
      .then((response)=>setCharacter(response.data))
      },[]);

   
    return(

        <div>
           {character.name?(
            <>
             <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.Specie}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image}  alt="" />
            </>
           ):(
            <h3>Eesperando...</h3>
           )}
        </div>
    )
}