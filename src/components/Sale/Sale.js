import './Sale.scss';
import novelties from '../../novelties.json';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import {ReactComponent as Ellipse} from "../../images/svg/ellipse.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SaleBanner from "../SaleBanner/SaleBanner";


function Sale() {
    return(
        <section className='sale'>
            <div className='container'>
               <SaleBanner/>
                <div className='sale-slider'>
                    <p className='sale-slider-title'>Знижки</p>
                    <Swiper
                        breakpoints={{
                            1500: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            780: {
                                slidesPerView: 2,
                            },

                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination,Navigation]}

                    >
                        {(
                            novelties?.novelties.map(novelte => {
                                if (novelte.sale === true){
                                    return <SwiperSlide key={novelte.id}>
                                        <div className='sale__item'>
                                            <img src={novelte.url} alt={novelte.title} className='sale__item--img'/>
                                            <div className='sale__item--icon'>
                                                <Ellipse/>
                                                <p>-{novelte.discount}%</p>
                                            </div>

                                        </div>
                                        <p className='sale__item--info'>{novelte.info}</p>
                                        <div className='sale__item--price'>
                                            <p className='sale__item--price-total'>{novelte.price} грн</p>
                                            <p className='sale__item--price-discount'>{Math.round(novelte.price - (novelte.price * novelte.discount / 100))} грн</p>
                                        </div>
                                    </SwiperSlide>
                                }
                                return null;
                            })
                        )}
                        <div className='swiper-button-prev'></div>
                        <div className='swiper-button-next'></div>
                    </Swiper>
                    <NavLink to={'sale'} className='sale--show'>дивитись всі</NavLink>
                    <span className='sale--link-description'></span>
                </div>
            </div>
        </section>
        )
}

export default Sale;