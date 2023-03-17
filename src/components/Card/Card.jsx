import styles from "./Card.module.css";
import { Link} from 'react-router-dom';
import {connect} from "react-redux";
import { addFavorite,removeFavorite } from "../../redux/actions";
import { useState } from "react";
 function Card({name,species,gender,image,onClose,id,addFavorite,removeFavorite}) {

   const [isFav,setIsFav]=useState(false);

   const handleFavorite =()=>{
      if(isFav) {
         setIsFav(false)
         removeFavorite(id)
      }
      else {
         setIsFav(true)
         addFavorite(name,species,gender,image,onClose,id)
      }
   }
   return (
      <div className={styles.conteiner}>
         {

            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
                  )
               }

         
       

         <button  onClick={onClose} className={styles.buttonclose}>X</button>
        <Link to= {`/detail/${id}`}>
        <h2>Name:{name}</h2>
        </Link>
         <h2> Species:{species}</h2>
         <h2>Gender:{gender}</h2>
         <img  src={image} alt="" /> 
         
      </div>
   );
}
const mapDispatchToProps =(dispatch)=>{
 return{
   addFavorite: (character)=>{dispatch(addFavorite(character))},
   removeFavorite:(id)=>{dispatch(removeFavorite(id))}
 }
}
export default connect(null,mapDispatchToProps)(Card)
