import { useLocation } from 'react-router-dom';

import imgRickPickle from './img/Rick-pickle.jpg'

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <>
            <p className={styles.fail__text}>404 Not Found Page:  {location.pathname}</p>

            <img className={styles.fail__img} src={imgRickPickle} alt="Error 404" />
        </>
    )
}

export default NotFoundPage;