'use client';
import { useEffect, useState } from 'react';
import Card from '../card/card';
import Form from '../form/form';
import style from './positionsPage.module.scss';
import { Reorder } from 'framer-motion';

const data = [
  {
    id:1,
    salary: 70,
    title: 'Рядовой',
    description:'10 заданий',
    responsibilities: {
      sale_product: true,
      set_price: true,
      view_analytics: true,
      buy_raw: true,
      assign_workers: true,
      duel: true,
      make_claims: true,
      assign_positions: true,
      kick: true,
    },
  },
  {
    id:2,
    salary: 40,
    title: 'Боец',
    description:'От 10 лвл',
    responsibilities: {
      sale_product: false,
      set_price: false,
      view_analytics: false,
      buy_raw: false,
      assign_workers: false,
      duel: false,
      make_claims: false,
      assign_positions: false,
      kick: false,
    },
  },
];




export default function PositionsPage () {
  const [posData, setPosData] = useState(data);
  const [selectedPosition, setSelectedPosition] = useState(posData[0]);

  

  useEffect(()=>{
    // setSelectedPosition(posData[0])
  },[posData, selectedPosition]);

  const handleClick = () => {
    const newPosition = {
      id:  Math.round(Math.random() * 10000),
      salary: 75,
      title: 'Новобранец',
      description:'5 заданий',
      responsibilities: {
        sale_product: false,
        set_price: false,
        view_analytics: false,
        buy_raw: false,
        assign_workers: false,
        duel: false,
        make_claims: false,
        assign_positions: false,
        kick: false,
      },
    };
    const newData = [newPosition, ...posData];
    setPosData(prev => ([newPosition, ...prev]));
  };


  
  return (
    <div className={style.positions}>
      <div className={style.positions__content}>
        <ul className={style.positions__list}>
          {posData && (
            <Reorder.Group 
              as="ol" 
              axis="y" 
              values={posData} 
              onReorder={setPosData}
            >
              {posData.map(element => (
                <Reorder.Item 
                  key={element.id} 
                  value={element}
                >
                  <Card info={element} handleCardClick={setSelectedPosition} />
                </Reorder.Item>
              ))}
            </Reorder.Group>
          )}
        </ul>
        <button onClick={handleClick} className={style['positions__list-button']}>Создать новую должность</button>
      </div>

      <div className={style.possitions__responsibilities}>
        <Form 
          setSelectedPosition={setSelectedPosition} 
          selectedPosition={selectedPosition} 
          setPosData={setPosData} 
          posData={posData}
        />
      </div>
    </div>
  );
};

