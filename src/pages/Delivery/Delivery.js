import './Delivery.scss';
import {ReactComponent as DeliverySvg} from '../../images/svg/delivery.svg';
import {NavLink} from "react-router-dom";
import React from "react";
import {ReactComponent as ArrowRight} from "../../images/svg/arrow-right.svg";
function Delivery() {
    return (
        <section className='delivery'>
            <div className='container'>
                <div className='delivery__pagination'>
                    <NavLink to='/' className='delivery__pagination--home' >Головна</NavLink>
                    <ArrowRight/>
                    <NavLink to='/delivery' className='delivery__pagination--collection'>Доставка</NavLink>
                </div>
                <div className='delivery-title'>
                    <p>Доставка</p>
                    <DeliverySvg className='delivery-svg'/>
                </div>
                <div className='delivery-article'>
                    <p>Дорогі наші клієнти! Магазин INTEFRA турбуючись про кожного з Вас пропонує придбати товари
                        брендової якості не витрачаючи свій дорогоцінний час на пошуки його в декількох магазинах.</p>
                    <p>Приділіть зекономленний час своїм рідним та близьким!</p>
                    <p>З любов'ю та повагою до кожного клієнта, INTEFRA</p>
                    <p>Зручна та швидка доставка по всім містам України:</p>
                    <p>- Доставка Новою поштою, Укрпоштою після повної оплати замовлення.</p>
                    <p>- Доставка замовлень накладеним платижем можлива тільки Новою поштою.</p>
                    <p>Замовлення доставляються нами до кур'єрської служби протягом 3х робочих днів після оформлення
                        замовлення, не враховуючи день замовлення, по всій Україні.</p>
                    <p>Наші офіси можна знайти: Київ,в.Урицького буд.3г та Milano, Via Manzoni 23</p>
                </div>
            </div>
        </section>
    )
}
export default Delivery;