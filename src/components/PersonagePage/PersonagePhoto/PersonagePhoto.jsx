import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setPersonToFavorite, removePersonFromFavorite } from '../../../store/actions';

import whiteStar from './img/white-star.svg'
import yellowStar from './img/yellow-star.svg'

import styles from './PersonagePhoto.module.css';

const PersonagePhoto = ({ 
    personId,
    personPhoto,
    personName,
    personFavorite,
    setPersonFavorite
}) => {
    const dispatch = useDispatch()

    const dipatchFavoriteCharacter = () => {
        if(personFavorite) {
            dispatch(removePersonFromFavorite(personId));
        }
        else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                }
            }));
        }
        
        setPersonFavorite(!personFavorite)
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
                <img 
                className={styles.favorite}
                onClick={dipatchFavoriteCharacter}
                src={personFavorite
                        ? yellowStar
                        : whiteStar
                } 
                alt="Add like" 
            />
            </div>
        </>
    )
}

PersonagePhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func
}

export default PersonagePhoto;