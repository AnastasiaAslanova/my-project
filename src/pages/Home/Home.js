// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import './Home.scss';
import { useStyleMediaQuery } from '../../hooks/useStyleMediaQuery';
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import InfoCollection from "../../components/InfoCollections/InfoCollections";
import InfoCollectionMobile from "../../components/InfoCollectionsMobile/InfoCollectionsMobile";
import Novelties from "../../components/Novelties/Novelties";
import Perfume from "../../components/Perfume/Perfume";

function Home() {
    const { matches: isMobile } = useStyleMediaQuery({ mixOrMax: 'max', widthOrHeight: 'width', value: 767 });
    return (
        <div className='home'>
            <Banner/>
            <Brands/>
            {isMobile && <InfoCollectionMobile />}
            {!isMobile && <InfoCollection/>}
            <Novelties/>
            <Perfume/>
        </div>
    )
}

export default Home;