import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';

import AppBar from 'components/AppBar';
import Spinner from 'components/Spinner';
import { changeFiltered } from 'redux/cars/carsSlice';


export default function SharedLayout() {
 


  return (
    <div>
      <AppBar/>
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
