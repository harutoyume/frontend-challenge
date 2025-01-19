import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { loadFavoriteCats } from '@/store/catsSlice';
import styles from './CatsList.module.css';
import Cat from '@/components/Cat/Cat';
import { useEffect } from 'react';

const CatsFavorites = () => {
    const dispatch = useAppDispatch();
    const { favoriteCats } = useAppSelector((state) => state.cats);

    useEffect(() => {
        dispatch(loadFavoriteCats());
    }, [dispatch]);

    return (
      <section>
            <ul className={styles.catsList}>
                {favoriteCats.map((cat, index) => (
                  <Cat key={index} cat={cat} />
                ))}
            </ul>
            <div className={styles.catsSoon}>
              {favoriteCats.length === 0 && <p>здесь появляются любимые котики</p>}
            </div>
      </section>
    )
}

export default CatsFavorites;