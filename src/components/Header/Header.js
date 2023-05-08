import './Header.scss';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Burger } from "../../images/svg/buger.svg";
import {ReactComponent as Delivery} from '../../images/svg/delivery.svg';
import {ReactComponent as BoxIcon} from "../../images/svg/box.svg";
import Menu from "../Menu/Menu";
import {useState} from "react";

function Header() {
    const [visible, setVisible] = useState(false);

    return (
        <header className='header'>
            <div className='container'>
                <div className="header-wrapper">
                    <button className='button-burger' onClick={() => setVisible(prev => !prev)}>
                        <Burger />
                    </button>
                    <Menu handlerClose={() => setVisible(false)} className={`menu ${visible ? 'menu-visible' : ''}`} />
                    <NavLink
                        to='/'
                        className='logo'>
                        <picture>
                            <source media="(max-width:541px)" srcSet={require('../../images/logo-mobile.png')}/>
                            <img src={require('../../images/logo.png')} alt='logo'/>
                        </picture>
                    </NavLink>
                    <div className='header-icons'>
                        <NavLink to='/box' className='box' href=''>
                            <BoxIcon className='header-icons-icon'/>
                            <p>Корзина</p>
                        </NavLink>
                        <NavLink to='delivery' className='delivery' href=''>
                            <Delivery className='header-icons-icon'/>
                            <p>Доставка</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;