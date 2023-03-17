import { NavLink} from 'react-router-dom';
export default function Error404 (){
    return (
        <div>
            <h1>Error 404</h1>
            <NavLink to= "/home"> volver al Home </NavLink>
        </div>
    )
}