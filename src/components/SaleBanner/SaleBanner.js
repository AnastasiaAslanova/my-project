import './SaleBanner.scss';
import SaleMen from '../../images/sale-men.png';
import SaleWomen from '../../images/sale-women.png';

function SaleBanner() {
    return (
        <div className='sale-banner'>
            <div className='sale-banner-images'>
                <div className='sale-banner-men'>
                    <img src={SaleMen} alt='men'/>
                </div>
                <div className='sale-banner-women'>
                    <img src={SaleWomen} alt='women'/>
                </div>
            </div>
            <div className='sale-banner-title'>
                <p>Знижки </p>
                <p className='vіdsotok'>-до 50%</p>
            </div>
        </div>
    )
}
export default SaleBanner;