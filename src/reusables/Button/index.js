import React from 'react';
import styles from './index.module.scss';

const Button = ({ text, onClick }) => {
    return (
        <div className={styles.container} onClick={onClick}>
            {text}
        </div>
    );
}

export default Button;