import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { NavLink} from 'react-router-dom';
export default function Nav(prop){
    function RandomInt() {
        return Math.floor(Math.random() * (826 - 1)+1);
      }
    return(
        <div className={styles.nav}>
        <SearchBar onSearch={prop.onSearch}
        />
        <button onClick={()=> prop.onSearch(RandomInt())} className={styles.randomButon}>Agrega carta al azar</button>
            <div>
               <NavLink to= "/about"> Abaut </NavLink>
               <NavLink to= "/homes"> Home </NavLink>
               
            </div>
        </div>
    )
}