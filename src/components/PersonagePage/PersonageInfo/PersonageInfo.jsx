import PropTypes from 'prop-types';
import styles from './PersonageInfo.module.css';

const PersonageInfo = ({ personInfo }) => {
    return (
        <>  
            <div className={styles.wrapper}>
                <ul className={styles.list__container}>
                    {personInfo.map(({title, data}) => (
                        data && (
                            <li className={styles.list_item} key={title}>
                                <span className={styles.list_title}>{title}: {data}</span>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </>
    )
}

PersonageInfo.propTypes = {
    personInfo: PropTypes.array
}

export default PersonageInfo;