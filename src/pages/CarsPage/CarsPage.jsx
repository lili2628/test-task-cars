import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Filter from 'components/Filter';
import CarsList from 'components/CarsList';
import { getCars } from "redux/cars/operations";


export default function CarsPage() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getCars());

  }, [dispatch]);



  return (
    <>
      <Filter/>
      <CarsList />
    </>
  );
}
