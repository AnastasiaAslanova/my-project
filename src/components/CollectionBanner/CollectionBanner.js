import './CollectionBanner.scss';
import {ReactComponent as Artigiani} from "../../images/svg/artigiani.svg";
import Banner from "../../images/collektionBanner.jpg";
import BannerMobile from "../../images/collectionBannerMobile.jpg";

import {NavLink} from "react-router-dom";
function CollectionBanner() {

    return (
        <section className="collection-banner">
            <picture>
                <source media="(max-width:541px)" srcSet={BannerMobile}/>
                <img src={Banner} className='collection-banner__img' alt="collection-banner"/>
            </picture>
            <div className='collection-banner__info'>
                <Artigiani/>
                <p>Вироби преміальної якості із найкращих матеріалів, орієнтуючись на традиції італійських виробників.</p>
                <NavLink to={'collections'} className='collections-banner--show'>дивитись коллекцію</NavLink>
                <span className='collections-banner--link-description'></span>
            </div>
        </section>
    )
}
export default CollectionBanner;