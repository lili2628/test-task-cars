import { useSelector} from "react-redux";

import { selectFavorites, selectCars } from "redux/cars/selectors";
import { addShownFavorites } from "redux/cars/carsSlice";

import CarsList from 'components/CarsList';


export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);
  const allCars = useSelector(selectCars);

  const favoriteCars = allCars.filter(item => favorites.includes(item.id));
  const total = favoriteCars.length;


  return (
    <>
      <CarsList allCars={favoriteCars} total={total} addShown={addShownFavorites} cars={favoriteCars}/>
    </>
  );
};
