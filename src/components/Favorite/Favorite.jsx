import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import icoFavorite from './img/favorites.png'

import styles from './Favorite.module.css';

const Favorite = () => {
    const [count, setCount] = useState()

    const storeDate = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const length = Object.keys(storeDate).length

        length.toString().length > 2 
            ? setCount('...')
            : setCount(length)
    })

    return (
            <div className={styles.container}>
                <Link to="/favorites">
                    <img className={styles.icon} src={icoFavorite} alt="Favorite" />
                    <span className={styles.counter}>{count}</span>
                </Link>
            </div>
    )
}

export default Favorite;