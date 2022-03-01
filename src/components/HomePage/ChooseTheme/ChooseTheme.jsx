import PropTypes from 'prop-types';
import cn from 'classnames'

import { useTheme } from '../../../context/ThemeProvider';
import { THEME_LIGHT, THEME_DARK, THEME_DEFAULT } from '../../../constants/themeConstants';

import imgRick from './img/Rick-theme.jpg'
import imgMorty from './img/Morty-theme.jpg'

import styles from './ChooseTheme.module.css';


const ChooseThemeItem = ({
    classes,
    theme,
    text,
    img

}) => {
    const isTheme = useTheme();
    return (
        
        <div 
        className={cn(styles.item, classes)}
        onClick={() => isTheme.change(theme)} 
    >
        <div className={styles.item__header}>{text}</div>
        <img className={styles.item__img} src={img} alt={text} />
    </div>
    )
}

const ChooseTheme = () => (
        <div className={styles.container}>
            <ChooseThemeItem
                classes={styles.item__dark}
                theme={THEME_DARK}
                text={'Rick theme'}
                img={imgRick}
            />
            <ChooseThemeItem
                classes={styles.item__light}
                theme={THEME_LIGHT}
                text={'Morty theme'}
                img={imgMorty}
            />
        </div>
)

ChooseThemeItem.propTypes = {
    classes: PropTypes.string,
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
}

export default ChooseTheme;