import { useNavigate } from 'react-router-dom'

import styles from './PersonageLinkBack.module.css';

const PersonageLinkBack = () => {
    const navigate = useNavigate();

    const handleGoBack = event => {
        event.preventDefault();
        navigate(-1);
    }

    return (
        <a
            href='#'
            onClick={handleGoBack}
            className={styles.link}
        >
            Go back
        </a>
    )
}


export default PersonageLinkBack;