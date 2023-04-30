import './Footer.scss';
import {ReactComponent as Location} from "../../images/svg/location.svg";
import {ReactComponent as Instagram} from "../../images/svg/instagram.svg";
import {ReactComponent as Telegram} from '../../images/svg/telegram.svg';
import {NavLink} from "react-router-dom";
import categories1 from "../../categories1.json";
import categories2 from "../../categories2.json";

function Footer() {
    return (
        <footer className="footer">
            <div className='container'>
                <div className='footer-wrapper'>
                    <div className='footer-info'>
                        <NavLink
                            to='/'
                            className={({isActive}) => isActive ? "active" : null}>
                            <picture>
                                <source media="(max-width:541px)" srcSet={require('../../images/logo-mobile.png')}/>
                                <img src={require('../../images/logo.png')} alt='logo'/>
                            </picture>
                        </NavLink>
                        <p className='footer-info__paragraph'>
                            INTEFRA - платформа, на якій об'єднані провідні італійські бренди одягу, взуття та
                            аксесуарів.
                        </p>
                        <p className='footer-info__small'>
                            INTEFRA - з 2012 року - 100% оригінальні товари.
                        </p>
                    </div>
                    <div className='footer-list1'>
                        <ul>
                            {
                                categories1.category1.map((category) =>(
                                    <li key={category.id}>
                                        <NavLink to='' className={({isActive}) => isActive ? "active" : null}>
                                            {category.title}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='footer-list2'>
                        <ul>
                            {
                                categories2.category2.map((category) =>(
                                    <li key={category.id}>
                                        <NavLink to='' className={({isActive}) => isActive ? "active" : null}>
                                            {category.title}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='footer-location'>
                        <ul>
                            <li className='footer-location__ua'>
                                <div className='footer-location__ua--info'>
                                    <p className='footer-location__ua--title'>Офіс в Україні</p>
                                    <p className='footer-location__ua--adress'>Київ,в.Урицького буд.3г</p>
                                </div>
                                <Location/>
                            </li>
                            <li className='footer-location__italy'>
                                <div className='footer-location__italy--info'>
                                    <p className='footer-location__italy--title'>Офіс в Італії</p>
                                    <p>Milano, Via Manzoni 23</p>
                                </div>
                                <Location/>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-message'>
                        <NavLink to='https://www.instagram.com'>
                            <Instagram/>
                        </NavLink>
                        <NavLink to='https://web.telegram.org' >
                            <Telegram/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;