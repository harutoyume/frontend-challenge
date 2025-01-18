import { ICat } from "@/models/ICat";
import styles from './Cat.module.css';
import { addToFavorites, deleteFromFavorites } from "@/store/catsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

interface CatProps {
    cat: ICat;
}

const Cat = ({cat}: CatProps) => {
    const dispatch = useAppDispatch();
    const { favoriteCats } = useAppSelector((state) => state.cats);
    const isFavorite = favoriteCats.some((someCat) => someCat.id === cat.id);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(deleteFromFavorites(cat));
            return;
        }
        dispatch(addToFavorites(cat));
    }

    return (
        <li className={styles.cat}>
            <img src={cat.url} />
            <button className={styles.favButton} onClick={handleFavoriteClick}>
                {isFavorite ? 'Faved' : 'Fav'}
            </button>
        </li>
    )
}

export default Cat;