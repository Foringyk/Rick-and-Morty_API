import PropTypes from 'prop-types';
import cn from 'classnames'

import '../index.css'
import styles from './UiButton.module.css';

const UiButton = ({ 
    text,
    onClick,
    disabled,
    theme='dark',
    classes
}) => {
    return (
        <button 
            onClick={onClick} 
            disabled={disabled}
            className={cn(styles.button, styles[theme], classes)}
        >
            {text}
        </button>
    )
}

UiButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.string
}

export default UiButton;