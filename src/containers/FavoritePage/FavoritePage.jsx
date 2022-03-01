import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CharactersList from '../../components/CharactersPage/CharactersList';

import styles from './FavoritePage.module.css';

const FavoritePage = () => {
    const [characters, setCharacters] = useState([])

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const arr = Object.entries(storeData)

        if(arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })

            setCharacters(res)
        }
    }, [])

    return (
        <> 
            <h1 className='header__text'>Favorite page</h1>
            { characters.length
                ? <CharactersList characters={characters} />
                : <h2 className={styles.comment}></h2>}
        </>
    )
}

export default FavoritePage;