import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import styles from './CharactersList.module.css';

const CharactersList = ({ characters }) => (
    <ul className={styles.list__container}>
        {characters.map(({ id, name, img }) => 
            <li className={styles.list__item} key={id}>
                <Link to={`/api/character/${id}`}>
                    <img className={styles.person__photo} src={img} alt={name} />
                    <p>{name}</p>
                </Link>
            </li>
        )}
    </ul>
)


CharactersList.propTypes = {
    characters: PropTypes.array
}

export default CharactersList;