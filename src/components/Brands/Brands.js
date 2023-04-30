import './Brands.scss';
import brands from '../../brands.json';

function Brands() {
    return (
        <section className='brands'>
            <div className='container'>
                <div className='top-brands'>топ-бренди</div>
                <ul>
                    {
                        brands.brands.map((brand) =>(
                            <li key={brand.id}>
                                <img src={brand.url} alt={brand.title}/>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </section>
    )
}
export default Brands;