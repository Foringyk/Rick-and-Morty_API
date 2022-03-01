import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { makeConcurrentRequest, chanheHTTP } from '../../../utils/network';

import styles from './PersonageFilms.module.css';

const PersonageFilms = ({ personFilms }) => {
    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map(url => chanheHTTP(url));
            const res = await makeConcurrentRequest(filmsHTTPS);

            setFilmsName(res)
        })();
    }, [])

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsName
                    .sort((a, b) => a.id - b.id)
                    .map(({ name, id}) => 
                        <li key={id} className={styles.list__item}>
                            <span className={styles.item__episode}>Episode {id}</span>
                            <span className={styles.item__colon}> : </span>
                            <span className={styles.item__title}>{name}</span>
                        </li>
                )}
            </ul>
        </div>
    )
}

PersonageFilms.propTypes = {
    personFilms: PropTypes.array
}

export default PersonageFilms;