import { useNavigate } from "react-router-dom";
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';

import Filter from 'components/Filter';
import CarsList from 'components/CarsList';


export default function CarsPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    navigate('/catalog')
  }, [navigate, dispatch]);

  return (
    <>
      <Filter/>
      <CarsList />
    </>
  );
}
