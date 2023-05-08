import './SalePage.scss';
import {NavLink} from "react-router-dom";
import {ReactComponent as ArrowRight} from "../../images/svg/arrow-right.svg";
import React from "react";
import SaleBanner from "../../components/SaleBanner/SaleBanner";
import SaleGoods from "../../components/SaleGoods/SaleGoods";

function  SalePage() {
    return (
        <section className='sale-goods'>

            <div className='sale__pagination'>
                <NavLink to='/' className='sale__pagination--home' >Головна</NavLink>
                <ArrowRight/>
                <NavLink to='/sale' className='sale__pagination--collection'>Знижки</NavLink>
            </div>
            <div className='sale-goods__title'>знижки</div>
            <div className='container'>
                <SaleBanner/>
                {<SaleGoods/>}
            </div>
        </section>
    )
}
export default SalePage;