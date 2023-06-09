import Card from '../Card/Card';
import styles from "./Cards.module.css"
export default function Cards(props) {
   return (
           <div className={styles.Cardconteiner}>
              {
               props.characters.map((character)=>{
                  return(
                     <Card
                     id={character.id}
                     name={character.name}
                     species={character.species}
                     gender={character.gender}
                     image={character.image}
                     onClose={()=>props.onClose(character.id)}
                     />
                  );
               })} 
            </div>
   );
}
