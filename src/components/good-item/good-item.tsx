import { useState } from 'react';
import { Good } from '../../types/types';
import './good-item.css';

type GoodItemProps = {
  good: Good;
};

function GoodItem ({good}: GoodItemProps): JSX.Element {
  const [goodSelected, setGoodSelected] = useState<boolean>(false);
  const [goodHovered, setGoodHovered] = useState<boolean>(false);

  const handleGoodClick = ():void => {
    if (good.isAvailable) {
      setGoodSelected(!goodSelected);
      setGoodHovered(false);
    }
  };

  const handleGoodOver = ():void => {
    if (good.isAvailable) {
      setGoodHovered(!goodHovered);
    }
  };

  const handleGoodLeave = ():void => {
    if (good.isAvailable) {
      setGoodHovered(false);
    }
  };

  const getGiftSuffix = (giftQty: number): string => {
    switch (giftQty.toString().slice(-1)) {
      case ('1'):
        return 'мышь';
      case ('2'):
      case ('3'):
      case ('4'):
        return 'мыши';
      default:
        return 'мышей';
    }
  };

  const checkBlockClassName = (block: string): string => {
    if (goodSelected) {
      return (goodHovered ? `${block}--selected-hovered` : `${block}--selected`);
    } else {
      return (goodHovered ? `${block}--hovered` : '');
    }
  };

  const getCardDescription = () => {
    if (!good.isAvailable) {
      return (`Печалька, с ${good.taste} закончился.`);
    } else {
      return (goodSelected
        ? good.description
        :
        (
          <>
            {'Чего сидишь? Порадуй котэ, '}
            <a
              href='#' className='card__description-buy'
              onClick={handleGoodClick}
            >
              купи.
            </a>
          </>
        )
      );
    }
  };

  return (
    <li className={`goods__list-item card ${good.isAvailable ? '' : 'card--not-available'}`}>
      <div
        className={`card__promo ${checkBlockClassName('card__promo')}`}
        onClick={handleGoodClick}
        onMouseEnter={handleGoodOver}
        onMouseLeave={handleGoodLeave}
      >
        <p className={`card__tagline ${checkBlockClassName('card__tagline')}`}>
          {goodSelected && goodHovered ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}
        </p>
        <h3 className='card__title'>{good.title}</h3>
        <span className='card__taste'>{`с ${good.taste}`}</span>
        <p className='card__portions'>
          <span>{`${good.portions} `}</span>
          порций
        </p>
        <p className={good.giftQty ? 'card__gifts' : 'card__gifts--hidden'}>
          <span>{good.giftQty === 1 ? '' : good.giftQty}</span>
          {` ${good.giftQty ? getGiftSuffix(good.giftQty) : ''} в подарок`}
        </p>
        <p className='card__resume'>{good.resume ? good.resume.toLowerCase() : ''}</p>
        <picture>
          <source type="image/webp" srcSet="img/card-bg@1x.webp 1x, img/card-bg@2x.webp 2x"/>
          <img className='card__image' src='img/card-bg@1x.png' srcSet='img/card-bg@2x.png 2x' width="368" height="360" alt={`Нямушка с ${good.taste}`}/>
        </picture>
        <p className={`card__netweight ${checkBlockClassName('card__netweight')}`}>
          <span>{good.netWeight}</span>
          <span>кг</span>
        </p>
      </div>
      <p className={`card__description ${good.isAvailable ? '' : 'card__description--not-available'}`}>
        {getCardDescription()}
      </p>
    </li>
  );
}

export default GoodItem;
