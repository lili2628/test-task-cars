import { useDispatch } from "react-redux";

import { updateFilter } from "redux/cars/carsSlice";
import css from './Filter.module.css';
import makes from 'data/makes.json';


export default function Filter() {
  const dispatch = useDispatch();

  let prices = [];

  for (let i = 30; i <= 250; i+=10) {
    prices.push(i);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const entry = [...formData.entries()];

    const entryFlat = entry.flat();

    const filter = {
            make: entryFlat[1],
            price: entryFlat[3],
            mileageStart: entryFlat[5],
            mileageEnd: entryFlat[7],
    };

    console.log(filter);


    dispatch(updateFilter(filter));
  };



  return (
    <div className={css.container}>
      <form method="post" className={css.form} onSubmit={handleSubmit}>
        <div className={css.form_element}>
          <label htmlFor="make" className={css.label}>Car brand</label>
          <input list="make-list" id="make" name="make" placeholder="Enter the text" className={css.input_make}/>
          <datalist id="make-list" className={css.datalist_make}>
            {makes.map(make => (
              <option key={make} value={make}></option>
            ))}
          </datalist>
        </div>

        <div className={css.form_element}>
          <label htmlFor="price" className={css.label} >Price / 1 hour</label>
          <input list="price-list" id="price" name="price" placeholder="To $" className={css.input_price}/>
          <datalist id="price-list" className={css.datalist_price}>
            {prices.map(price => (
              <option key={price} value={price}></option>
            ))}
          </datalist>
        </div>

        <div className={css.form_element}>
          <label htmlFor="mileageStart" className={css.label}>Car mileage / km</label>
            <div className={css.input_wrap}>
              <input type="number" id="mileageStart" min="0" name="mileageStart" placeholder="From" className={css.input_for}></input>
              <input type="number" id="mileageEnd" min="0" name="mileageEnd" placeholder="To" className={css.input_to}></input>
            </div>
        </div>

        <button type="submit" className={css.search_btn}>Search</button>
      </form>
    </div>
  );
};
