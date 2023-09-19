


import { useDispatch, useSelector } from 'react-redux'

import { addFavorites, deleteFavorites } from "redux/cars/carsSlice";
import { selectFavorites} from 'redux/cars/selectors';

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

  //const [page, setPage] = useState(1);

  //const filteredCars = cars
   // .filter(car => {
   //   return ((filters.miles.length === 0 || filters.miles.includes(car.mileage)) &&
   //     (filters.model.length === 0 || filters.model.includes(car.make)) &&
   //     (filters.price.length === 0 || filters.price.includes(car.rentalPrice)))
   // }
  //  );


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
      console.log("page", page);
      const n = page * 8;
      const m = (page + 1) * 8;
      const shownCars = allCars.slice(n, m);
      console.log(shownCars);

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
      {(total > 8 || total-cars.length>8 ) && (
          <button type="button" className={css.loadMore_btn} onClick={onLoadMore}>
            Load More
          </button>
      )}
    </div>

  );
};



