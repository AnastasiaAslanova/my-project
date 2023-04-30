import './Novelties.scss';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";
import novelties from '../../novelties.json';

function Novelties() {

    return(
        <section className='novelties'>
            <div className='container'>
                <div className='novelties-title'>новинки</div>
                <div className='novelties-description'>48 оновлень</div>
                <div className='swiper-container'>
                    <Swiper
                        // slidesPerView={4}
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
                        {
                            novelties?.novelties.map((novelte) => (
                                <SwiperSlide key={novelte.id} className='novelties__item'>
                                    <img src={novelte.url} alt={novelte.title} className='novelties__item--img'/>
                                    <p className='novelties__item--info'>{novelte.info}</p>
                                </SwiperSlide>
                            ))
                        }
                        <div className='swiper-button-prev'></div>
                        <div className='swiper-button-next'></div>
                    </Swiper>

                </div>

                <NavLink to={'collections'} className='novelties--show'>дивитись більше</NavLink>
                <span className='novelties--link-description'></span>
            </div>
        </section>
    )
}
export default Novelties;