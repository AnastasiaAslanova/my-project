import './Woman.scss';
import {NavLink} from "react-router-dom";
import collection from "../../collections.json";
import {ReactComponent as ArrowRight} from "../../images/svg/arrow-right.svg";
import React from "react";

function Woman() {
    return (
        <section className='woman-collections'>
            <div className='woman-collections__wrapper'>
                <div className='woman-collections__title'>
                    <p>жіноча колекція</p>
                </div>
                <div className='woman-collections__pagination'>
                    <NavLink to='/' className='woman-collections__pagination--home' >Головна</NavLink>
                    <ArrowRight/>
                    <NavLink to='/collection' className='woman-collections__pagination--collection'>жіноча колекція</NavLink>
                </div>
            </div>
            <div className='container'>
                <ul className='woman-collections__item'>
                    {(
                        collection.collections.map(collection => {
                            if (collection.sex === "female") {
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
export default Woman;