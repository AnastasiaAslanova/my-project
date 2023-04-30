import './Banner.scss';
import Men from '../../images/banner-men.png';
import  Women from '../../images/banner-women.png';
import {NavLink} from "react-router-dom";

function Banner () {

    return (
        <section className='banner'>
            <div className='banner-make'>
                <div className='banner-overlay'></div>
                <div className='banner-men'>
                    <img src={Men} alt='men'/>
                    <NavLink to='/men' className='banner-men--title'>Чоловіче</NavLink>
                </div>
                <div className='banner-woman'>
                    <img src={Women} alt='woman'/>
                    <NavLink to='/woman' className='banner-woman--title'>Жіноче</NavLink>
                </div>
            </div>

        </section>
    )
}

export default Banner;