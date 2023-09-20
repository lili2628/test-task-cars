import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectShownCars, selectTotal, selectCars, selectFilteredCars } from "redux/cars/selectors";
import { getCars } from "redux/cars/operations";
import { addShownCars, addShownFiltered } from "redux/cars/carsSlice";

import Filter from 'components/Filter';
import CarsList from 'components/CarsList';



export default function CarsPage() {

  const dispatch = useDispatch();
  // const {make, price, mileageStart, mileageEnd} = useSelector(selectFilter);


  useEffect(() => {

    dispatch(getCars());

  }, [dispatch]);


  const cars = useSelector(selectShownCars);
  const total = useSelector(selectTotal);
  const allCars = useSelector(selectCars);

  const filteredCars = useSelector(selectFilteredCars);
  const totalFiltered = filteredCars.length;
  console.log(filteredCars);

  let notFilterShow = true;

  if (filteredCars.length !== 0) {
    notFilterShow = false;
  };

  console.log(notFilterShow);



  return (
    <>
      <Filter />
      {!notFilterShow ? (
        <CarsList allCars={filteredCars} cars={filteredCars} total={totalFiltered} addShown={addShownFiltered}/>
        ) : (
        <CarsList allCars={allCars} cars={cars} total={total} addShown={addShownCars}/>
      )}
    </>
  );
};
