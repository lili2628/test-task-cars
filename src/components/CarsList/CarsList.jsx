//import { useState } from 'react';

//import useCars from "hooks/useCars";
import CarsItem from 'components/CarsList';
import css from './CarList.module.css';
import {useSelector} from 'react-redux';

import { selectCars } from "redux/cars/selectors";



export default function CarsList() {

  const cars = useSelector(selectCars);
  //const {cars} = useCars();
  //const [page, setPage] = useState(1);

  //const filteredCars = cars
   // .filter(car => {
   //   return ((filters.miles.length === 0 || filters.miles.includes(car.mileage)) &&
   //     (filters.model.length === 0 || filters.model.includes(car.make)) &&
   //     (filters.price.length === 0 || filters.price.includes(car.rentalPrice)))
   // }
  //  );

  console.log("cars", cars);
  const cars1 = cars.map(item => item.year);
  console.log('cars1', cars1);

  return (
    <ul className={css.car_list}>
      <li>my</li>
  </ul>
  );
};



