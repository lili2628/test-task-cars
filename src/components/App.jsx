import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SharedLayout from 'components/SharedLayout';


const HomePage = lazy(() => import('pages/HomePage'));
const CarsPage = lazy(() => import('pages/CarsPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));

export default function App()  {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CarsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
};
