'use client';
import { useEffect, useState } from 'react';
import style from './form.module.scss';

export default function Responsibilities({setSelectedPosition, selectedPosition, setPosData, posData}) {
  const [positionTitle, setPositionTitle] = useState(selectedPosition.title || '');
  const [responsibilities, setResponsibilities] = useState(selectedPosition.responsibilities);

  useEffect(() => {
    setPositionTitle(selectedPosition.title);
    setResponsibilities(selectedPosition.responsibilities);
  }, [selectedPosition, posData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosData(posData.map(element => {
      if(element.id === selectedPosition.id) {
        return {...element, responsibilities, title: positionTitle};
      } else return element;
    }));

    setSelectedPosition(prev => ({...prev, title: positionTitle, responsibilities}));
  };

  const handleCheckboxChange = (responsibilityName, isChecked) => {
    setResponsibilities((prevResponsibilities) => ({
      ...prevResponsibilities,
      [responsibilityName]: isChecked,
    }));
  };

  return (
    <form className={style.form}>
      <div className={style.form__header}>
        <h3 className={style['form__header-title']}>Название</h3>
        <input
          value={positionTitle}
          onChange={e => setPositionTitle(e.target.value)} 
          type="text" 
          className={style['form__header-input']} 
        />
      </div>
      <div className={style.form__responsibilities}>
        <div className={style['form__responsibilities-title-block']}>
          <h3 className={style['form__responsibilities-title']}>Обязаности</h3>
          
        </div>
        <div className={style['form__responsibilities-content']}>
          <div className={`${style['form__responsibilities-job']} ${style['form__responsibilities-job--1']}`}>
            <p className={style['form__responsibilities-job-title']}>Торговля</p>
            <div className={style['form__responsibilities-job-category']}>
              <input 
                checked={responsibilities.sale_product} 
                onChange={(e) => handleCheckboxChange('sale_product', e.target.checked)}
                id="Продавать продукт"
                className={style['form__responsibilities-job-category-input']} 
                type="checkbox" 
              />
              <label className={style['form__responsibilities-job-category-label']}htmlFor="Продавать продукт">
                <p className={style['form__responsibilities-job-category-text']} >Продавать продукт</p>
              </label>
            </div>
            <div className={style['form__responsibilities-job-category']}>
              <input  
                id="Выставлять цены"
                checked={responsibilities.set_price} 
                onChange={(e) => handleCheckboxChange('set_price', e.target.checked)}
                className={style['form__responsibilities-job-category-input']} 
                type="checkbox" 
              />
              <label className={style['form__responsibilities-job-category-label']}htmlFor="Выставлять цены">
                <p className={style['form__responsibilities-job-category-text']} >Выставлять цены</p>
              </label>
            </div>
            <div className={style['form__responsibilities-job-category']}>
              <input 
                checked={responsibilities.view_analytics} 
                onChange={(e) => handleCheckboxChange('view_analytics', e.target.checked)}
                id="Смотреть аналитику"
                className={style['form__responsibilities-job-category-input']} 
                type="checkbox"
              />
              <label className={style['form__responsibilities-job-category-label']}htmlFor="Смотреть аналитику">
                <p className={style['form__responsibilities-job-category-text']} >Смотреть аналитику</p>
              </label>
            </div>
          </div>
          <div className={`${style['form__responsibilities-job']} ${style['form__responsibilities-job--2']}`}>
            <p className={style['form__responsibilities-job-title']}>Производство</p>
            <div className={style['form__responsibilities-job-category']}>
              <input 
                checked={responsibilities.buy_raw} 
                onChange={(e) => handleCheckboxChange('buy_raw', e.target.checked)}
                id="Закупать сырье"
                className={style['form__responsibilities-job-category-input']} 
                type="checkbox" 
              />
              <label className={style['form__responsibilities-job-category-label']}htmlFor="Закупать сырье">
                <p className={style['form__responsibilities-job-category-text']} >Закупать сырье</p>
              </label>
            </div>
            <div className={style['form__responsibilities-job-category']}>
              <input 
                checked={responsibilities.assign_workers} 
                onChange={(e) => handleCheckboxChange('assign_workers', e.target.checked)}
                id="Назначать рабочих" 
                className={style['form__responsibilities-job-category-input']} 
                type="checkbox" 
              />
              <label className={style['form__responsibilities-job-category-label']}htmlFor="Назначать рабочих">
                <p className={style['form__responsibilities-job-category-text']} >Назначать рабочих</p>
              </label>
            </div>
          </div>

          <div className={`${style['form__responsibilities-job']} ${style['form__responsibilities-job--3']}`}>
            <p className={style['form__responsibilities-job-title']}>Разборки</p>
            <div className={style['form__responsibilities-job-category']}>
              <input 
                checked={responsibilities.duel} 
                onChange={(e) => handleCheckboxChange('duel', e.target.checked)}
                id="Дуель"
                className={style['form__responsibilities-job-category-input']} 
                type="checkbox" 
              />
              <label className={style['form__responsibilities-job-category-label']}htmlFor="Дуель">
                <p className={style['form__responsibilities-job-category-text']} >Дуель</p>
              </label>
            </div>
            <div className={style['form__responsibilities-job-category']}>
              <input 
                checked={responsibilities.make_claims} 
                onChange={(e) => handleCheckboxChange('make_claims', e.target.checked)}
                id="Выставлять притензии"
                className={style['form__responsibilities-job-category-input']} 
                type="checkbox" 
              />
              <label className={style['form__responsibilities-job-category-label']}htmlFor="Выставлять притензии">
                <p className={style['form__responsibilities-job-category-text']} >Выставлять притензии</p>
              </label>
            </div>
          </div>

          <div className={`${style['form__responsibilities-job']} ${style['form__responsibilities-job--4']}`}>
            <p className={style['form__responsibilities-job-title']}>Управление</p>
            <div className={style['form__responsibilities-job-category']}>
              <input 
                checked={responsibilities.assign_positions} 
                onChange={(e) => handleCheckboxChange('assign_positions', e.target.checked)}
                id="Назначать должности" 
                className={style['form__responsibilities-job-category-input']} 
                type="checkbox" 
              />
              <label className={style['form__responsibilities-job-category-label']}htmlFor="Назначать должности">
                <p className={style['form__responsibilities-job-category-text']} >Назначать должности</p>
              </label>
            </div>
            <div className={style['form__responsibilities-job-category']}>
              <input 
                checked={responsibilities.kick} 
                onChange={(e) => handleCheckboxChange('kick', e.target.checked)}
                id="Выгонять из банды" className={style['form__responsibilities-job-category-input']} 
                type="checkbox" />
              <label className={style['form__responsibilities-job-category-label']}htmlFor="Выгонять из банды">
                <p className={style['form__responsibilities-job-category-text']} >Выгонять из банды</p>
              </label>
            </div>
          </div>
        </div>
        <button onClick={e => handleSubmit(e)} type="submit" className={style['form__responsibilities-button']}>Сохранить</button>
      </div>
    </form>
  );
};
