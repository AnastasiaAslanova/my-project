import './News.scss';
import Goods from "../../components/Goods/Goods";
import {NavLink} from "react-router-dom";
import {ReactComponent as ArrowRight} from "../../images/svg/arrow-right.svg";
import React from "react";

function News() {
    return (
        <section className='news-goods'>
            <div className='news-goods__title'>новинки</div>
            <div className='news__pagination'>
                <NavLink to='/' className='news__pagination--home' >Головна</NavLink>
                <ArrowRight/>
                <NavLink to='/collection' className='news__pagination--collection'>Новинки</NavLink>
            </div>
            <div className='news'>
                <div className='container'>
                    <Goods/>
                </div>

            </div>
        </section>
    )
}
export default News;