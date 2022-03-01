import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UiButton from '../../UI-kit/UiButton';

import styles from './CharactersNavigation.module.css';

const CharactersNavigation = ({
    getResponse,
    prevPage,
    nextPage,
    counterPage
}) => {
    const handleChangePrev = () => getResponse(prevPage);
    const handleChangeNext = () => getResponse(nextPage);

    return (
        <>
            <div className={styles.container}>
                <Link to = {`/api/character/?page=${counterPage - 1}`} className={styles.buttons}>
                    <UiButton
                        text='Previous'
                        onClick={handleChangePrev}
                        disabled={!prevPage}
                    />
                </Link>
                <Link to = {`/api/character/?page=${counterPage + 1}`} className={styles.buttons}>
                    <UiButton
                        text='Next'
                        onClick={handleChangeNext}
                        disabled={!nextPage}
                    />
                </Link>
            </div>
        </>
    )
}

CharactersNavigation.propTypes = {
    getResponse: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
}

export default CharactersNavigation;