import './NotFound.scss';
import {NavLink} from "react-router-dom";
import {ReactComponent as Arrow } from "../../images/svg/arow.svg";

function NotFound() {
    return (
        <div className='not-found'>
            <div className='container'>
                <h1>Сторінка нажаль не знайдена.</h1>
                <NavLink to='/' className='home-page'>
                    <Arrow className='not-found__arrow'/>
                    Повернутись на головну сторінку
                </NavLink>
                <img src={require('../../images/404.png')} alt='404' className='not-found__img'/>
            </div>
        </div>
    )
}

export default NotFound;