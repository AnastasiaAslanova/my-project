import './Collections.scss';
import collection from "../../collections.json";
import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import {ReactComponent as ArrowRight} from "../../images/svg/arrow-right.svg";

function Collections() {

    const [sortType, setSortType] = useState("ascending");
    const [sortByField, setSortByField] = useState("title");
    const [results, setResults] = useState(collection.collections);

    function sortFunc(results, sortType, sortByField) {
        if (sortType === "ascending") {
            results.sort((a, b) => a[sortByField] < b[sortByField] ? -1 : 1)
        }
        else if (sortType === "descending") {
            results.sort((a, b) => a[sortByField] < b[sortByField] ? 1 : -1)
        }
        return results;
    }
    function sortDirection(direction) {
        setSortType(direction);
        setResults(sortFunc(results, direction, sortByField))
    }
    function sortBy(field) {
        setSortByField(field);
        setResults(sortFunc(results, sortType, field))
    }

    return (
        <div className='collections'>
            <div className='collections__wrapper'>
                <div className='collection__title'>
                    <p>колекція</p>
                </div>
                <div className='collections__pagination'>
                    <NavLink to='/' className='collections__pagination--home' >Головна</NavLink>
                    <ArrowRight/>
                    <NavLink to='/collection' className='collections__pagination--collection'>Колекція</NavLink>
                </div>

                <form className='collections__sort'>
                    <p>Сортувати:</p>

                    <select className='collections__select' defaultValue={'info'} onChange={(e) => sortBy(e.target.value)}>
                        <option value="info">По назві товару</option>
                        <option value="popularity">За рейтингом</option>

                    </select>
                    <select className='collections__select' defaultValue={'DEFAULT'} onChange={(e) => sortDirection(e.target.value)}>
                        <option value="ascending">За зростанням</option>
                        <option value="descending">За зменьшенням</option>
                    </select>
                </form>
            </div>

                <div className='container'>
                <ul className='collections__item'>
                    {(
                        results.map(collection => {
                            return   <li key={collection.id}>
                                    <img src={collection.url} alt={collection.title} className='collections__img'/>
                                    <p>{collection.info}</p>
                                </li>
                            })
                    )}
                </ul>
            </div>
        </div>
    )
}
export default Collections;