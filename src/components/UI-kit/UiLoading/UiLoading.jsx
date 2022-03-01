import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import cn from "classnames"


import styles from './UiLoading.module.css';

const generatorCircles = (
    numberCircles,
    rotate = false
) => {
    let arrayCircles = [];

    for (let i = 0; i < numberCircles; i++) (
        arrayCircles.push(
            <span 
                key={i}
                className={rotate && styles.rotate}
                style={{'--i': i}}
            ></span>
        )
    )

    return arrayCircles;
}


const UiLoading = ({
    numberCirclesStatic = 8,
    numberCirclesAnimated = 5,
    colorTheme = 'white',
    theme = 'blue',
    isShadow = true,
    classes
}) => {
    const [loaderIcon, setLoaderIcon] = useState(null);
    const circlesStatic = generatorCircles(numberCirclesStatic, '');
    const circlesAnimated = generatorCircles(numberCirclesAnimated, true)


    useEffect(() => {
        switch(theme) {
            case 'black': setLoaderIcon('black'); break;
            case 'white': setLoaderIcon('white'); break;
            case 'blue': setLoaderIcon('blue'); break;
            default: setLoaderIcon('black');
        }
    }, [])

    return (
        <div className={cn(styles.container , classes)}>
            <svg>
                <filter id="loww">
                    <feGaussianBlur in="SourceGraphic"
                                    stdDeviation="10"/>
                    <feColorMatrix values = "1 0 0 0 0      0 1 0 0 0       0 0 1 0 0       0 0 0 20 -10 "></feColorMatrix>
                </filter>
            </svg>
            <div className={styles.loader}>
                {circlesStatic}
                {circlesAnimated}
            </div>
        </div>
    )
}

UiLoading.propTypes = {
    theme: PropTypes.string,
    classes: PropTypes.string,
    isShadow: PropTypes.bool
}

export default UiLoading;