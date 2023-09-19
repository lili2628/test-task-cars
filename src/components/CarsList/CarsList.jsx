


import { useDispatch, useSelector } from 'react-redux'

import { addFavorites, deleteFavorites } from "redux/cars/carsSlice";
import { selectFavorites } from 'redux/cars/selectors';

import CarsItem from 'components/CarsItem';
import css from './CarList.module.css';




export default function CarsList({cars}) {
  const dispatch = useDispatch();

  let favorites = useSelector(selectFavorites);


  const onFavClick =  async (id) => {

    if (favorites.includes(id)) {
      favorites = favorites.filter(favorite => favorite !== id);

      dispatch(deleteFavorites(favorites));
    } else {
      dispatch(addFavorites(id));
    };
};

  //const [page, setPage] = useState(1);

  //const filteredCars = cars
   // .filter(car => {
   //   return ((filters.miles.length === 0 || filters.miles.includes(car.mileage)) &&
   //     (filters.model.length === 0 || filters.model.includes(car.make)) &&
   //     (filters.price.length === 0 || filters.price.includes(car.rentalPrice)))
   // }
  //  );



  return (
    <div className={css.container}>
      <ul className={css.car_list}>
        {cars && (
          <>
          {cars.map(item => (
            <CarsItem
                key={item.id}
                item={item}
                isFavorites={favorites.includes(item.id)}
                favHandler={onFavClick}
              />
          ))}
          </>
        )}
      </ul>
    </div>

  );
};



