import './SaleGoods.scss';
import goods from "../../novelties.json";
import {NavLink} from "react-router-dom";
import React from "react";
import {ReactComponent as ArrowRight} from "../../images/svg/arrow-right.svg";
import {ReactComponent as Ellipse} from "../../images/svg/ellipse.svg";

function SaleGoods() {
    return (
        <section className='sale-goods'>
            <ul className='sale-goods__item'>
                {(
                    goods.novelties.map(good => {
                        if (good.sale === true){
                            return <li key={good.id}>
                                <img src={good.url} alt={good.title} className='sale-good__item--img'/>
                                <div className='sale__item--icon'>
                                    <Ellipse/>
                                    <p>-{good.discount}%</p>
                                </div>
                                <p className='sale-good__item--title'>{good.info}</p>
                                <div className='sale-good__item--price'>
                                    <p className='sale-good__item--price-total'>{good.price}грн</p>
                                    <p className='sale-good__item--price-discount'>{Math.round(good.price -(good.price * good.discount/100))}грн</p>
                                </div>
                                <NavLink to={good.id} className='sale-good__item--show'>
                                    <p>Дивитись докладніше</p>
                                    <ArrowRight/>
                                </NavLink>
                            </li>
                        }
                        return  null;
                    })

                )}
            </ul>
        </section>
    )
}
export default SaleGoods;