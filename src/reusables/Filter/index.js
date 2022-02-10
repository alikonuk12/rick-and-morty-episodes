import React from 'react';
import styles from './index.module.scss';

const Filter = ({ onChange, value }) => {
    return (
        <div className={styles.container}>
            <input
                type='text'
                className={styles.input}
                placeholder='Search...'
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default Filter;