import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectCars } from "redux/cars/selectors";
import { getCars } from "redux/cars/operations";

import Filter from 'components/Filter';
import CarsList from 'components/CarsList';





export default function CarsPage() {

  const dispatch = useDispatch();


  useEffect(() => {

 dispatch(getCars());

  }, [dispatch]);


  const cars = useSelector(selectCars);

  return (
    <>
      <Filter />
      <CarsList cars={cars}/>
    </>
  );
};
