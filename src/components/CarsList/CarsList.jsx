import { useDispatch, useSelector } from 'react-redux'

import { addFavorites, deleteFavorites} from "redux/cars/carsSlice";
import { selectFavorites } from 'redux/cars/selectors';

import CarsItem from 'components/CarsItem';
import css from './CarList.module.css';


export default function CarsList({cars, total, addShown, allCars}) {
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

  const condition = total-cars.length > 0 && total > 8;

  const onLoadMore = () => {
    if (total===cars.length) {
      return;
    };

    if (total-cars.length<=8) {
      const last = total-cars.length;
      const shownCars = allCars.slice(-last);

      dispatch(addShown(shownCars));
    };

    if (total-cars.length>8 && total>8)  {
      const page = Math.ceil(cars.length/8);
      const n = page * 8;
      const m = (page + 1) * 8;
      const shownCars = allCars.slice(n, m);

      dispatch(addShown(shownCars));
    };
  };


  
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
        {condition && (
          <button type="button" className={css.loadMore_btn} onClick={onLoadMore}>
            Load More
          </button>
        )}
    </div>
  );
};



