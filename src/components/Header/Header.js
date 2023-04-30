import './Header.scss';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Burger } from "../../images/svg/buger.svg";
import {ReactComponent as Delivery} from '../../images/svg/delivery.svg'
import {ReactComponent as BoxIcon} from "../../images/svg/box.svg";

function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className="header-wrapper">
                    <NavLink to='/' className='burger' href="">
                        <Burger/>
                    </NavLink>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? "active" : null}>
                        <picture>
                            <source media="(max-width:541px)" srcSet={require('../../images/logo-mobile.png')}/>
                            <img src={require('../../images/logo.png')} alt='logo'/>
                        </picture>
                    </NavLink>
                    <div className='header-icons'>
                        <NavLink to='/box' className='box' href=''>
                            <BoxIcon/>
                            <p>Корзина</p>
                        </NavLink>
                        <NavLink to='delivery' className='delivery' href=''>
                            <Delivery/>
                            <p>Доставка</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;