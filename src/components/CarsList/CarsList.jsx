//import { useState } from 'react';

import CarsItem from 'components/CarsItem';
import css from './CarList.module.css';
import {useSelector} from 'react-redux';

import { selectCars } from "redux/cars/selectors";



export default function CarsList() {



  //const [page, setPage] = useState(1);

  //const filteredCars = cars
   // .filter(car => {
   //   return ((filters.miles.length === 0 || filters.miles.includes(car.mileage)) &&
   //     (filters.model.length === 0 || filters.model.includes(car.make)) &&
   //     (filters.price.length === 0 || filters.price.includes(car.rentalPrice)))
   // }
  //  );
  const cars = useSelector(selectCars);


  return (
    <div className={css.container}>
      <ul className={css.car_list}>
        {cars && (
          <>
          {cars.map(item => (
            <CarsItem
                key={item.id}
                item={item}
              />
          ))}
          </>
        )}
      </ul>
    </div>

  );
};



