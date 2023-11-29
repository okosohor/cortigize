'use client';
import style from './card.module.scss';
import Image from 'next/image';
import { Reorder } from 'framer-motion';

export default function Card ({info, handleCardClick}) {

  const { salary, title, description } = info;
  const handleClick = () => {
    handleCardClick(info);
  };
  return (
    <div className={style.card} onClick={handleClick}>
      <div className={style.card__content}>
        <p className={style.card__title}>{title}</p>
        <p className={style.card__salary}><span className={style['card__salary--bold-yellow']}>{`$${salary}`}</span> / час</p>
      </div>
      <p className={style.card__description}>{description}</p>
      <Image
        className={style.card__image}
        src="/images/dots.svg" 
        alt="dots"
        width={12}
        height={20}
      />
    </div>
  );
};
