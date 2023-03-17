import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import styles from "./App.module.css"
import { useState,useEffect } from 'react'
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Detail from './components/Detail/Detail.jsx'
import Error404 from './components/Error404/Error404.jsx'
import Form from "./components/Form/Form.jsx"




function App () {
  const URL_BASE="https://be-a-rym.up.railway.app/api";
  const key="7c80a13bc6b2.f519174d1b55592fd845";

  const [characters,setCharacters]= useState([]);
 
 const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'ejemplo@gmail.com';
const password = '1password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
  !access && navigate('/');
}, [access]);
  
   function onSearch(character) {
    fetch(`${URL_BASE}/character/${character}?key=${key}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            if(!characters.find((char)=>char.id===data.id)){
              setCharacters((oldChars) => [...oldChars, data]);
            }else window.alert('Personaje repetido');
            
          } else {
            window.alert('No hay personajes con ese ID');
          }
       });
 }
 const onClose = id => {
  setCharacters(characters.filter(char => char.id !== id)); 
 }
 const location=useLocation() // me trae el lugar donde yo estoy parado  "/", "/home", etc
  return (
    <div style={{ padding: '25px' }}>
      {location.pathname !== "/" &&  <div className={styles.app}> 
          <Nav onSearch={onSearch}/>
      </div>}
     
      <Routes>
      <Route path='/' element={<Form login={login}/>} />
       <Route path="/about" element={<About />}/>
       <Route  path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
       <Route path="/detail/:detailId" element={<Detail />}/>
       <Route  path= '*' element={<Error404 />}/>
      </Routes>
      <hr />
    </div>
  )
}

export default App
