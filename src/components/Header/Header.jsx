import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import Favorite from '../Favorite';
import { useTheme } from '../../context/ThemeProvider';
import { THEME_LIGHT, THEME_DARK, THEME_DEFAULT } from '../../constants/themeConstants';

import icoRick from './img/ico-rick.jpg'
import icoMorty from './img/ico-morty.jpg'

import styles from './Header.module.css';

const Header = () => {
    const [icon, setIcon] = useState(THEME_DEFAULT)
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(icoMorty); break;
            case THEME_DARK: setIcon(icoRick); break;
            case THEME_DEFAULT: setIcon(icoRick); break;
        
            default: setIcon(icoRick); break;
        }
    }, [isTheme])

    return (
        <div className={styles.container}>
            <NavLink to="/"><img className={styles.logo} src={icon} alt="icon" /></NavLink>

            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/api/character/?page=1">Character</NavLink></li>
                <li><NavLink to="/not-found">Not Found</NavLink></li>
                <li><NavLink to="/fail">Fail</NavLink></li>
                <li><NavLink to="/loading">Loading</NavLink></li>
                { <Favorite /> }
            </ul>
        </div>
    )
}

export default Header;