import { milesFormat } from "utils/milesFormat";
import css from './CarsItem.module.css';


export default function CarsItem(item) {
   
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
    mileage,
  } = item;

  const miles = milesFormat(mileage);

  return (
    <>
      <li className={css.item}> 
        <div className={css.item_wrap}>
          <img
            className={css.item_photo}
            src={photoLink}
            alt={make}
            width="274"
            height="268"
            />
          <p className={css.item_info}>
            { description}
          </p>
        </div>
      </li>
    </>
  );
};