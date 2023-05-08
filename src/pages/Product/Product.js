import './Product.scss';
import {useParams, NavLink} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import goods from "../../novelties.json";
import {ReactComponent as ArrowRight} from "../../images/svg/arrow-right.svg";
import {ReactComponent as Ellipse} from "../../images/svg/ellipse.svg";
import NotFound from "../NotFound/NotFound";

function Product() {

    const { id } = useParams();
    const [data, setData] = useState({});
    const { title, url, brand, name, code, sizes,more, material,lining,generator,sale,discount,price } = data;
    const [selectedSize, setSelectedSize] = useState ();
    function sizeChanged(e){
       setSelectedSize(parseInt(e.target.getAttribute('dataid')));
    }
    useEffect(() => {
        const good = goods.novelties.filter(element => element.id === id)[0] || {};
        setData(good);
        good.sizes && setSelectedSize(good.sizes[0]);
    }, [id]);

    return(
        <section className="product">
            <div className="container">
                <div className='product__pagination'>
                    <NavLink to='/' className='product__pagination--home' >Головна</NavLink>
                    <ArrowRight/>
                    <NavLink to='/sale' className='product__pagination--collection'>Знижки</NavLink>
                    <ArrowRight/>
                    <NavLink to='/news' className='product__pagination--collection'>Новинки</NavLink>
                </div>
                {
                    data !== null && <div className='product-all-info'>
                        <div className='product-images'>
                            {
                                url && <img src={url} alt={title}/>
                            }
                        </div>
                        <div className='product-info'>
                            {
                                title &&  <div className='product-description'>
                                            <p className='product-title'>{name}</p>
                                            <p className='product-code'>Арикул: {code}</p>
                                            {
                                                sale === true
                                                    ?
                                                    (<div className='product-price'>
                                                        <p className='product-price--total'>{price}грн</p>
                                                        <p className='product-price--discount'>{Math.round(price -(price * discount/100))}грн</p>
                                                        <div className='sale__item--icon'>
                                                            <Ellipse/>
                                                            <p>-{discount}%</p>
                                                        </div>
                                                    </div>)
                                                    :
                                                    <p className='product-price--not-sale'>{price}грн</p>
                                            }
                                            <p className='product-size'>
                                                {sizes && sizes.map((size,index) => {
                                                    return <button dataid={size} onClick={sizeChanged} key={index} className={`product-button ${selectedSize === size ? 'active' : ''}`}>{size}</button>
                                                })}
                                            </p>
                                            <p className='product-more-info'>{more}</p>
                                            <p className='product-material'>Матеріал: {material}</p>
                                            <p className='product-lining'>Підкладка: {lining}</p>
                                            <p className='product-generator'>Виробник: {generator}</p>
                                            <p className='product-brand'>
                                                <img src={brand} alt='brand'/> </p>

                                </div>
                            }
                            <button className='product-add'>Додати у кошик</button>
                        </div>


                    </div>
                }
                {
                    data === null && <NotFound/>
                }
            </div>
        </section>
    )
}
export default Product;