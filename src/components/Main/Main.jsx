import { Link } from "react-router-dom";

import css from "./Main.module.css";
import animatedCar from '../../images/car1.png';


export default function Main() {

  const phoneNumber = 'tel:+380730000000';

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.wrap}>
          <img
            className={css.photo}
            src={animatedCar}
            alt='animated car'
            width="400"
          />

          <div className={css.content}>
            <p className={css.title}>
            RentalCar
            </p>

            <ul className={css.list}>
              <li className={css.item}>
                <p className={css.item_caption}>Fast</p>
              </li>
              <li className={css.item }>
              <p className={css.item_caption}>Safe</p>
              </li>
              <li className={css.item}>
              <p className={css.item_caption}>Comfort</p>
              </li>
            </ul>
          </div>

          <div className={css.info}>
            <p className={css.info_title}>
            We are proud that more and more Ukrainians and guests of the country prefer our daily car rental service. There are many reasons for that:
            </p>

            <ul>
              <li>We offer a vast selection of cars for rent, as on the RENTAL site you can choose from more than 250 cars. Thanks to this, you can select a specific car you would like to drive and not a car class.</li>
              <li>Only new cars - all cars for rent that we offer our customers are not older than three years.</li>
              <li>Wide price range and constant actions and discounts on car rental services. At the RENTAL site, everyone can find a car for rent that suits him in terms of the price and conditions of the lease. All prices are listed on the site: no hidden or extra fees. We have a separate loyalty program for regular customers.</li>
              <li>Rent a car in a few clicks. Choose the car you need, the period you want to rent a car, and leave your contact phone number. Our operator will contact you within several minutes to elaborate on the details and confirm the car rental order.</li>
              <li>Car rental services work 24/7 without holidays and weekends. Our managers are ready to help you rent a car at any time of the day or night.</li>
              <li>Targeted delivery of the rented car. You do not need to go somewhere to rent a car.</li>
              <li>Delivery of cars to any place in Ukraine. You do not need to come to the office to rent a car. All you need is just to name the delivery address. A car will be waiting for you at a specified time, even in Ukrainian cities where our car rental branches are not yet available.</li>
              <li>We take care of our clients' time. Even the car rental process without a deposit at the company RENTAL takes 5-10 minutes, after which you receive the keys and a full tank.</li>
              <li>Concierge Service. In addition to the car rental itself, our services include 24-hour support for any questions. We are ready to help you with hotel reservations, searching for items you need, and making restaurant reservations. We can even help feed pets left at home.</li>
              <li> Technical support 24/7. No matter what happens on the road, whether it's a punctured tire or a dead battery, our experts are always ready to solve any technical issues related to the car.</li>
              <li> A fully equipped and sanitized car for rent that undergoes regular maintenance.</li>
            </ul>
          </div>
        </div>
      </div>



      <div className={css.footer_one}>
        <div className={css.footer_wrap}>
          <div className={css.button_wrap}>
            <Link className={css.button_rentalCar} to={phoneNumber}>
              Rental Car
            </Link>
          </div>

          <p className={css.tel}> Tel.: +380730000000</p>
        </div>
      </div>
    </div>
  );
};
