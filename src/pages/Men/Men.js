import './Men.scss';
import collection from "../../collections.json";
import {NavLink} from "react-router-dom";
import {ReactComponent as ArrowRight} from "../../images/svg/arrow-right.svg";
import React from "react";

function Men() {
    return (
        <section className='men-collections'>
            <div className='men-collections__wrapper'>
                <div className='men-collections__title'>
                    <p>чоловіча колекція</p>
                </div>
                <div className='men-collections__pagination'>
                    <NavLink to='/' className='men-collections__pagination--home' >головна</NavLink>
                    <ArrowRight/>
                    <NavLink to='/collection' className='men-collections__pagination--collection'>чоловіча колекція</NavLink>
                </div>
            </div>
            <div className='container'>
                <ul className='men-collections__item'>
                    {(
                        collection.collections.map(collection => {
                            if (collection.sex === "male") {
                                return <li key={collection.id}>
                                    <img src={collection.url} alt={collection.title} className='collections__img'/>
                                    <p>{collection.info}</p>
                                </li>
                            }
                            return null;
                        })
                    )}
                </ul>
            </div>
        </section>
    )
}
export default Men;