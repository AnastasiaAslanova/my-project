import "./AboutUs.scss";
import {ReactComponent as Shop} from "../../images/svg/shop.svg";
import {ReactComponent as Car} from "../../images/svg/car.svg";
import {ReactComponent as Fitting} from "../../images/svg/fitting.svg";
import {ReactComponent as Label} from "../../images/svg/label.svg";


function AboutUs() {
    return (
        <section className='about-us'>
            <div className='container'>
                <ul className='about-us__wrapper'>
                    <li key='shoper'>
                        <Shop/>
                        <p>Працюємо з 2012 року</p>
                    </li>
                    <li key='label'>
                        <Label/>
                        <p>100% оригінальні речі</p>
                    </li>
                    <li key='car'>
                        <Car/>
                        <p>Доставка по всїй Україні</p>
                    </li>
                    <li key='fitting'>
                        <Fitting/>
                        <p>Є послуга "Примірка"</p>
                    </li>

                </ul>
            </div>
        </section>
    )
}
export default AboutUs;