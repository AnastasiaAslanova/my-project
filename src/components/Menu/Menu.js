import "./Menu.scss";
import menu from '../../menu.json';
import {NavLink} from "react-router-dom";


function Menu(props) {
    return (
        <section className={`burger-menu ${props.className}`}>
           <ul>
               {
                   menu?.menu.map((menu) => (
                       <li key={menu.id} className='info-collections__item'>
                           <img src={menu.url} alt={menu.title} className='menu-icon'/>
                           <NavLink to={menu.path} onClick = {props.handlerClose} className='menu-link'>{menu.title}</NavLink>
                       </li>
                   ))
               }
           </ul>
            <button className='button-close' onClick = {props.handlerClose}>Закрити</button>
        </section>
    )
}
export default Menu;