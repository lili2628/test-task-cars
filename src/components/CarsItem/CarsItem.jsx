import { useState } from "react";

import { cutPhrase } from "utils/cutPhrase";
import css from './CarsItem.module.css';
import noCarImage from 'images/noCarImage.jpeg';
import svg from 'images/sprite.svg';
import ModalCar from "components/ModalCar/ModalCar";
import Modal from "components/Modal/Modal";


export default function CarsItem({item, favHandler, isFavorites}) {

    const {
    id,
    year,
    make,
    model,
    type,
    photoLink,
    functionalities,
    rentalCompany,
    rentalPrice,
    mileage,
    address,
  } = item;

  const [openModal, setOpenModal] = useState(false);

  const close = () => setOpenModal(false);


  const comma = ",";
  const arrAddress = address.split(",");
  const numberPartsInAdtress = arrAddress.length;
  const country = arrAddress[numberPartsInAdtress-1];
  const city = arrAddress[numberPartsInAdtress-2];

  const advantage = cutPhrase(functionalities[0]);


  return (
      <li className={css.item}>
        <div className={css.item_wrapPhoto}>
          <img
            className={css.item_photo}
            src={photoLink ? photoLink : noCarImage}
            alt={make}
            width="274"
            height="268"
          />
          <button className={isFavorites ? [css.fav_btn, css.infav_btn].join(' ') : [css.fav_btn].join(' ')}
            type="button"
            onClick={()=> favHandler(id)}>
            <svg  width="18" height="18">
              <use href={svg + '#heart'}></use>
            </svg>
          </button>
        </div>

          <div className={css.item_mainInfo}>
            <div className={css.item_mainInfoWrap}>
              <p>{make} </p>
              <p className={css.margin}>{comma}</p>
              <p>{year}</p>
            </div>
            <p>{rentalPrice}</p>
          </div>

          <div className={css.item_additInfoWrap}>
            <ul className={css.item_listCharacteristics}>
              <li className={css.listCharacteristicsItem}> {city} </li>
              <li className={css.listCharacteristicsItem}> {country} </li>
              <li className={css.listCharacteristicsItem}> {rentalCompany} </li>
            </ul>
            <ul className={css.item_listCharacteristics}>
              <li className={css.listCharacteristicsItem}> {type} </li>
              <li className={css.listCharacteristicsItem}> {model} </li>
              <li className={css.listCharacteristicsItem}> {mileage} </li>
              <li className={css.listCharacteristicsItem}> {advantage} </li>
            </ul>
          </div>
          <div className={css.button_wrap}>
          <button type="button" className={css.button_learnMore} onClick={() => setOpenModal(true)}>
            Learn more
          </button>
          </div>

          {openModal && (
              <Modal isOpen={openModal} onClose={close}>
                <ModalCar
                  item={item}
                />
              </Modal>
          )}
      </li>
  );
};
