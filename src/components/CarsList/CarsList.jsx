import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import useCars from "hooks/useCars";
import { getCars } from "redux/cars/operations";
import CarsItem from 'components/CarsList';


export default function CarsPage() {
  const dispatch = useDispatch();

  const { cars, total, filters } = useCars();
  const [page, setPage] = useState(1);

  const filteredCars = cars
    .filter(car => {
      return (filters.miles.length === 0 || filters.miles.includes(car.miletage)) &&
        (filters.model.length === 0 || filters.model.includes(car.make) &&
        (filters.price.length === 0 || filters.price.includes(car.rentalPrice)))
    }
    );

  useEffect(() => {

    dispatch(getCars());

  }, [dispatch, page]);


  return (
    <>
      <ul>
        {filteredCars.length > 0 ? (
          filteredCars.map(item => (
            <CarsItem
              key={item.id}
              item={item}
            />
          ))
        ) : (
            <div>
              <p> No cars match the selected filters </p>
            </div>
        )}

      </ul>
    </>
  );
};



