import { Link } from "react-router-dom";

import { milesFormat } from "utils/milesFormat";
import { cutPhrase } from "utils/cutPhrase";
import noCarImage from 'images/noCarImage.jpeg';
import css from './ModalCar.module.css';

export default function ModalCar({item}) {

  const {
    id,
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
    rentalPrice,
    mileage,
    address,
  } = item;

  const comma = ",";
  const arrAddress = address.split(",");
  const numberPartsInAdtress = arrAddress.length;
  const country = arrAddress[numberPartsInAdtress-1];
  const city = arrAddress[numberPartsInAdtress-2];

  const accessoriesFirst = cutPhrase(accessories[0]);
  const accessoriesSecond = cutPhrase(accessories[1]);
  const accessoriesThird = cutPhrase(accessories[2]);

  const advantageFirst = cutPhrase(functionalities[0]);
  const advantageSecond = cutPhrase(functionalities[1]);
  const advantageThird = cutPhrase(functionalities[2]);

  const miles = milesFormat(mileage);

  const arrRentalConditions = rentalConditions.split("\n");
  const rentalConditionFirst = arrRentalConditions[0].slice(-2);
  const rentalConditionSecond = arrRentalConditions[1];
  const rentalConditionThird = arrRentalConditions[2];

  const phoneNumber = 'tel:+380730000000';


  return (
    <div className={css.item}>
      <img
        className={css.item_photo}
        src={photoLink ? photoLink : noCarImage}
        alt={make}
        width="461"
        height="248"
      />

      <div className={css.item_mainInfo}>
        <p className={css.margin}>{make} </p>
        <p className={css.item_model}>{model}</p>
        <p className={css.margin}>{comma}</p>
        <p>{year}</p>
      </div>


      <div className={css.item_additInfoWrap}>
        <ul className={css.item_listCharacteristics}>
          <li className={css.listCharacteristicsItem}> {city} </li>
          <li className={css.listCharacteristicsItem}> {country} </li>
          <li className={css.listCharacteristicsItem}> Id: {id} </li>
          <li className={css.listCharacteristicsItem}> Year: {year} </li>
          <li className={css.listCharacteristicsItem}> Type: {type} </li>
        </ul>
        <ul className={css.item_listCharacteristics}>
          <li className={css.listCharacteristicsItem}> Fuel Consumption: {fuelConsumption} </li>
          <li className={css.listCharacteristicsItem}> {model} </li>
          <li className={css.listCharacteristicsItem}> Engine Size: {engineSize} </li>
        </ul>
      </div>

        <p className={css.item_description}>{description}</p>

        <p className={css.item_functionality}>Accessories and functionalities:</p>

        <div className={css.item_additInfoWrap}>
        <ul className={css.item_listCharacteristics}>
          <li className={css.listCharacteristicsItem}> {accessoriesFirst} </li>
          <li className={css.listCharacteristicsItem}> {accessoriesSecond} </li>
          <li className={css.listCharacteristicsItem}> {accessoriesThird} </li>
        </ul>
        <ul className={css.item_listCharacteristics}>
          <li className={css.listCharacteristicsItem}> {advantageFirst} </li>
          <li className={css.listCharacteristicsItem}> {advantageSecond} </li>
          <li className={css.listCharacteristicsItem}> {advantageThird} </li>
        </ul>
      </div>

      <p className={css.item_rental}>Rental Conditions:</p>

      <ul className={css.item_rentalList}>
        <li className={css.item_rentalItem}>Minimum age: <p className={css.item_rentalItemSpan}>{rentalConditionFirst}</p></li>
        <li className={css.item_rentalItem}>{rentalConditionSecond}</li>
        <li className={css.item_rentalItem}>{rentalConditionThird}</li>
        <li className={css.item_rentalItem}>Mileage: <p className={css.item_rentalItemSpan}>{miles}</p></li>
        <li className={css.item_rentalItem}>Price: <p className={css.item_rentalItemSpan}>{rentalPrice}</p></li>
      </ul>

      <div className={css.button_wrap}>
      <Link className={css.button_rentalCar} to={phoneNumber}>
        Rental Car
      </Link>
      </div>
  </div>
  );
};
