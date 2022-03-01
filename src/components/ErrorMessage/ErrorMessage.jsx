import imgFail from './img/fail.jpg'

import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ errorApi }) => {
    return (
        <>
            <div className={styles.fail__text}>Error: {errorApi}</div>
            
            <img className={styles.fail__img} src={imgFail} alt="Error 404" />
        </>
    )
}

export default ErrorMessage;