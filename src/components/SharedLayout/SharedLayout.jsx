import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import AppBar from 'components/AppBar';
import Spinner from 'components/Spinner';


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
