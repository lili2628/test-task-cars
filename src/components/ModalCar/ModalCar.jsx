import { milesFormat } from "utils/milesFormat";
import noCarImage from 'images/noCarImage.jpeg';
import { cutPhrase } from "utils/cutPhrase";
import css from './ModalCar.module.css';

export default function ModalCar({item}) {

  const {
    year,
    make,
    model,
    type,
    photoLink,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    rentalConditions,
    functionalities,
    rentalCompany,
    rentalPrice,
    mileage,
    address,
  } = item;

  const comma = ",";
  const arrAddress = address.split(",");
  const numberPartsInAdtress = arrAddress.length;
  const country = arrAddress[numberPartsInAdtress-1];
  const city = arrAddress[numberPartsInAdtress-2];

  const advantage = cutPhrase(functionalities[0]);

  const miles = milesFormat(mileage);


  return (
    <div className={css.item}>
      <img
        className={css.item_photo}
        src={photoLink ? photoLink : noCarImage}
        alt={make}
        width="274"
        height="268"
      />

      <div className={css.item_mainInfo}>
        <div className={css.item_mainInfoWrap}>
          <p className={css.margin}>{make} </p>
          <p className={css.item_model}>{model}</p>
          <p className={css.margin}>{comma}</p>
          <p>{year}</p>
        </div>
        <p>{rentalPrice}</p>
      </div>


      <div className={css.item_additInfoWrap}>
        <ul className={css.item_listCharacteristics}>
          <li className={css.listCharacteristicsItem}> {city} </li>
          <li className={css.listCharacteristicsItem}> {country} </li>
          <li className={css.listCharacteristicsItem}> {rentalCompany} </li>
        </ul>
        <ul className={css.item_listCharacteristics}>
          <li className={css.listCharacteristicsItem}> {type} </li>
          <li className={css.listCharacteristicsItem}> {model} </li>
          <li className={css.listCharacteristicsItem}> {miles} </li>
          <li className={css.listCharacteristicsItem}> {advantage} </li>
        </ul>
      </div>
      <div className={css.button_wrap}>
      <button type="button" className={css.button_rentalCar} >
        Rental Car
      </button>
      </div>
  </div>
  );
};
