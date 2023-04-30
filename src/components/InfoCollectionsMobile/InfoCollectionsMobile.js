import './InfoCollectionsMobile.scss';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import goods from '../../goods.json';


function InfoCollectionMobile() {
    return (
        <section className='info-collections-mobile'>
            <div className='container'>
                <div className='info-collections__wrapper'>
                    <p className='info-collections-title'>коллекції</p>
                    <Swiper
                        modules={[Navigation,Pagination, A11y]}
                        loop={true}
                        rewind={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                            {
                                goods?.goods.map((good) => (
                                    <SwiperSlide key={good.id} className='info-collections__item'>
                                        <img src={good.url} alt={good.title} className='info-collections__item--img'/>
                                        <p className='info-collections__item--info'>{good.info}</p>
                                    </SwiperSlide>
                                ))
                            }
                    </Swiper>
                    <NavLink to={'collections'} className='info-collections--show'>дивитись більше</NavLink>
                    <span className='info-collections--link-description'></span>
                </div>
            </div>
        </section>
    )
}

export default InfoCollectionMobile;