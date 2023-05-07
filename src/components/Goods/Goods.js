import './Goods.scss';
import goods from "../../novelties.json";
import {NavLink} from "react-router-dom";
import React from "react";
import {ReactComponent as ArrowRight} from "../../images/svg/arrow-right.svg";

function Goods() {
    return(
        <section className='goods'>
            <ul className='goods__item'>
                {(
                    goods.novelties.map(good => {
                        return <li key={good.id}>
                            <img src={good.url} alt={good.title} className='good__item--img'/>
                            <p className='good__item--title'>{good.info}</p>
                                {
                                    good.sale === true
                                    ?
                                        (<div className='good__item--price'>
                                    <p className='good__item--price-total'>{good.price}грн</p>
                                    <p className='good__item--price-discount'>{Math.round(good.price -(good.price * good.discount/100))}грн</p>
                                    </div>)
                                    :
                                    <p className='good__item--price-not-sale'>{good.price}грн</p>

                                }
                            <NavLink to={good.title} className='good__item--show'>
                                <p>Дивитись докладніше</p>
                                <ArrowRight/>
                            </NavLink>
                        </li>
                    })
                )}
            </ul>
        </section>
    )
}
export default Goods;