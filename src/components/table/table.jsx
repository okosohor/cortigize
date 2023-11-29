'use client';
import { usePathname } from 'next/navigation';
import style from './table.module.scss';
import Link from 'next/link';

export default function Table({ children }) {
  const pathname = usePathname();
  return (
    <div className={style.table}>
      <div className={style.table__header}>
        <div className={`${style['table__category']} ${pathname === '/hierarchy' && style['table__category--is-active']} ${pathname === '/positions' && style['table__category--before-active']}`}>
          <Link href={'/hierarchy'}>
            <p className={style['table__category-text']}>Иерархия</p>
          </Link>
        </div>
        <div className={`${style['table__category']} ${pathname === '/positions' && style['table__category--is-active']} ${pathname === '/staff' && style['table__category--before-active']}`}>
          <Link href={'/positions'}>
            <p className={style['table__category-text']}>Должности</p>
          </Link>
        </div>
        <div className={`${style['table__category']} ${pathname === '/staff' && style['table__category--is-active']} ${pathname === '/equipment' && style['table__category--before-active']}`}>
          <Link href={'/staff'}>
            <p className={style['table__category-text']}>Список персонала</p>
          </Link>
        </div>
        <div className={`${style['table__category']} ${pathname === '/equipment' && style['table__category--is-active']} `}>
          <Link href={'/equipment'}>
            <p className={style['table__category-text']}>Наборы екипировки</p>
          </Link>
        </div>
      </div>
      <div className={style.table__content}>
        {children}
      </div>
    </div>
  );

};
