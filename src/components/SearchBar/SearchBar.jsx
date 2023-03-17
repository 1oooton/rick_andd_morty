import { useState } from "react";
import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
   const [character, setCharacter] = useState("");
   const handleChange = e =>{
      const {value}= e.target;
      setCharacter(value);
   }
   return (
      <div className={styles.bar}>
          <input type='search'
          name="search" 
          id="search"
          onChange={handleChange}
          className={styles.searchInpout}/>
       <button onClick={()=> props.onSearch(character)}
       className={styles.searchButon}
       >Agregar</button> 
      </div>
   );
}
