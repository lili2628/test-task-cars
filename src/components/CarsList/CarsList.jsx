import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import useCars from "hooks/useCars";
import { getCars } from "redux/cars/operations";
import CarsItem from 'components/CarsList';
import css from './CarList.module.css';


export default function CarsPage() {
  const dispatch = useDispatch();

  const { cars, total, filters } = useCars();
  const [page, setPage] = useState(1);

  //const filteredCars = cars
   // .filter(car => {
   //   return ((filters.miles.length === 0 || filters.miles.includes(car.mileage)) &&
   //     (filters.model.length === 0 || filters.model.includes(car.make)) &&
   //     (filters.price.length === 0 || filters.price.includes(car.rentalPrice)))
   // }
  //  );

  useEffect(() => {

    dispatch(getCars());

  }, [dispatch, page]);


  return (
    <>
      <ul className={css.car_list}>
        {cars.map(item => (
            <CarsItem
              key={item.id}
              item={item}
            />
          ))}
      </ul>
    </>
  );
};



