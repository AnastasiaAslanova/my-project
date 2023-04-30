import './Perfume.scss';
import perfume from '../../perfume.json';
import {NavLink} from "react-router-dom";

function Perfume() {
    return (
        <section className='perfume'>

            <div className='perfume-make'>
                <div className='perfume-overlay'></div>
                {
                    perfume?.perfume.map((perfume) => (
                        <div key={perfume.id} className='perfume-item'>
                            <img src={perfume.url} alt={perfume.title}/>
                            <div className={`${perfume.title} perfume-info`}>
                                <p className='perfume-name'>{perfume.name}</p>
                                <NavLink to={perfume.link} className='perfume-link'>Дивитись</NavLink>
                                <span className='perfume--link-description'></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Perfume;