import './InfoCollections.scss';
import { NavLink } from 'react-router-dom';
import goods from '../../goods.json';

function InfoCollection() {

    return (
        <section className='info-collections'>
            <div className='container'>
                <div className='info-collections__wrapper'>
                    <p className='info-collections-title'>коллекції</p>
                    <ul>
                        {
                        goods?.goods.map((good) => (
                            <li key={good.id} className='info-collections__item'>
                                <img src={good.url} alt={good.title}/>
                                <p>{good.info}</p>
                            </li>
                            ))
                        }
                    </ul>
                    <NavLink to={'collections'} className='info-collections--show'>дивитись більше</NavLink>
                    <span className='info-collections--link-description'></span>
                </div>
            </div>
        </section>
    )
}

export default InfoCollection;