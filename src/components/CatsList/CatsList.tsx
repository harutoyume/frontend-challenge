import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { fetchCats } from '@/store/catsSlice';
import useCatsListLogic from './CatsList.logic';
import styles from './CatsList.module.css';
import Cat from '@/components/Cat/Cat';

const CatsList = () => {
    const dispatch = useAppDispatch();
    const { cats, page, isLoading } = useAppSelector((state) => state.cats);
    const initialFetch = useRef(false);

    const { handleScroll } = useCatsListLogic();

    useEffect(() => {
        if (!initialFetch.current && page === 1 && !isLoading) {
          dispatch(fetchCats(page))
          initialFetch.current = true
        }
      });

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [handleScroll]);

    return (
      <section>
            <ul className={styles.catsList}>
                {cats.map((cat, index) => (
                  <Cat key={index} cat={cat}/>
                ))}
            </ul>
            <div className={styles.catsLoading}>
              {isLoading && page === 1 && <p>... загружаем котиков ...</p>}
              {isLoading && page > 1 && <p>... загружаем еще котиков ...</p>}
            </div>
      </section>
    )
}

export default CatsList;