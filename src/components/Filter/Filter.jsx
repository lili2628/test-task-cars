import { useDispatch, useSelector } from "react-redux";

import { changeFiltered } from "redux/cars/carsSlice";
import { selectCars } from "redux/cars/selectors";
import css from './Filter.module.css';
import makes from 'data/makes.json';



export default function Filter() {
  const dispatch = useDispatch();

  const allCars = useSelector(selectCars);


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
    console.log(entryFlat);

    const filter = {
            make: entryFlat[1],
            price: entryFlat[3],
            mileageStart: entryFlat[5],
            mileageEnd: entryFlat[7],
    };

    const { make, price, mileageStart, mileageEnd } = filter;
    console.log(filter);
  
    let filteredByPrice = [];
    let filteredByMake = [];
    let filteredByMileage = [];
    let idsOfFilteredByPrice = allCars.map(item => item.id);
    let idsOfFilteredByMake = allCars.map(item => item.id);
    let idsOfFilteredByMileage = allCars.map(item => item.id);
  
    if (price !== "") {
      filteredByPrice = allCars.filter(item => Number(item.rentalPrice.substring(1)) <= price);
        if (filteredByPrice !== []) {
          idsOfFilteredByPrice = filteredByPrice.map(item => item.id);
        } else {
          idsOfFilteredByPrice = [];
        }
    };
   console.log(idsOfFilteredByPrice);
  
    if (make !== "") {
      filteredByMake = allCars.filter(item => item.make === make);
      if (filteredByMake !== []) {
        idsOfFilteredByMake = filteredByMake.map(item => item.id);
      } else {
        idsOfFilteredByMake = [];
      }
    };
    
 
    console.log(idsOfFilteredByMake);
    
    if (mileageStart !=="" && mileageEnd === "") {
      filteredByMileage = allCars.filter(item => item.mileage >= mileageStart);
      console.log(filteredByMileage);
      if (filteredByMileage !== []) {
        idsOfFilteredByMileage = filteredByMileage.map(item => item.id);
        console.log(idsOfFilteredByMileage);
      } else {
        idsOfFilteredByMileage = [];
      };
    } else if (mileageStart !=="" && mileageEnd === !"") {
      filteredByMileage = allCars.filter(item => (item.mileage >= mileageStart) && (item.mileage <= mileageEnd));
      console.log(filteredByMileage);
      if (filteredByMileage !== []) {
        idsOfFilteredByMileage = filteredByMileage.map(item => item.id);
        console.log(idsOfFilteredByMileage);
      } else {
        idsOfFilteredByMileage = [];
      };
    } else if (mileageStart ==="" && mileageEnd !== "") {
      filteredByMileage = allCars.filter(item => item.mileage <= mileageStart);
      console.log(filteredByMileage);
      if (filteredByMileage !== []) {
        idsOfFilteredByMileage = filteredByMileage.map(item => item.id);
        console.log(idsOfFilteredByMileage);
      } else {
        idsOfFilteredByMileage = [];
      };
    };

    console.log(idsOfFilteredByMileage);

    console.log(make);
  
    if (make !== "" || price !== "" || mileageStart !== "" || mileageEnd !== "") {
  
      const idsOfPriceMakeFilteredCars = idsOfFilteredByMake.filter(value => idsOfFilteredByPrice.includes(value));
      console.log(idsOfPriceMakeFilteredCars);
      const idsOfAllFilteredCars = idsOfPriceMakeFilteredCars.filter(value => idsOfFilteredByMileage.includes(value));
      console.log(idsOfAllFilteredCars);
      console.log(idsOfAllFilteredCars.length);
    
      if (idsOfAllFilteredCars.length !== 0) {
        console.log(allCars);
        const allFilteredCards = allCars.filter(item => idsOfAllFilteredCars.includes(item.id));
        console.log(allFilteredCards);
        
        dispatch(changeFiltered({
          filtered: allFilteredCards,
          filter,
        }));
      } else {
        dispatch(changeFiltered({
          filtered: [],
          filter,
        }));
      };
    } else {
      dispatch(changeFiltered({
        filtered: [],
        filter: {
          make: "",
          price: "",
          mileageStart: "",
          mileageEnd: "",
        },
      }))
    };
  };



  return (
    <div className={css.container}>
      <form method="post" className={css.form} onSubmit={handleSubmit}>
        <div className={css.form_element}>

          <label htmlFor="make" className={css.label}>Car brand</label>
          <input list="make-list" id="make" name="make"  className={css.input_make} placeholder="Enter the text" />
          <datalist id="make-list" className={css.datalist_make}>
            {makes.map(item => (
              <option key={item} value={item}></option>
            ))}
          </datalist>
        </div>

        <div className={css.form_element}>
          <label htmlFor="price" className={css.label} >Price / 1 hour</label>
          <input list="price-list" id="price" name="price" className={css.input_price} placeholder="To $" />
          <datalist id="price-list" className={css.datalist_price}>
            {prices.map(item => (
              <option key={item} value={item}></option>
            ))}
          </datalist>
        </div>

        <div className={css.form_element}>
          <label htmlFor="mileageStart" className={css.label}>Car mileage / km</label>
            <div className={css.input_wrap}>
              <input type="number" id="mileageStart" min="0" name="mileageStart" placeholder="From" className={css.input_for} ></input>
              <input type="number" id="mileageEnd" min="0" name="mileageEnd" placeholder="To" className={css.input_to} ></input>
            </div>
        </div>

        <button type="submit" className={css.search_btn}>Search</button>
      </form>
    </div>
  );
};
