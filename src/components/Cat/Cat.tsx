import { ICat } from "@/models/ICat";
import styles from './Cat.module.css';
import { addToFavorites, deleteFromFavorites } from "@/store/catsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import Image from 'next/image';
import { useState } from 'react';

interface CatProps {
    cat: ICat;
}

const Cat = ({cat}: CatProps) => {
    const dispatch = useAppDispatch();
    const { favoriteCats } = useAppSelector((state) => state.cats);
    const isFavorite = favoriteCats.some((someCat) => someCat.id === cat.id);
    const [isHovered, setIsHovered] = useState(false); 

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(deleteFromFavorites(cat));
            return;
        }
        dispatch(addToFavorites(cat));
    }

    return (
        <li className={styles.cat}>
            <img src={cat.url} className={styles.catImg}/>
            <button 
                className={styles.favButton} 
                onClick={handleFavoriteClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label={isFavorite ? "Убрать из любимых" : "Добавить в любимые"}
            >
                <Image
                    src="/favorite_border.svg"
                    alt=""
                    width={40}
                    height={37}
                    className={`${styles.favIcon} ${(!isFavorite && !isHovered) ? styles.favIconActive : ""}`}
                />
                <Image
                    src="/favorite.svg"
                    alt=""
                    width={40}
                    height={37}
                    className={`${styles.favIcon} ${(isFavorite || isHovered) ? styles.favIconActive : ""}`}
                />
            </button>
        </li>
    )
}

export default Cat;