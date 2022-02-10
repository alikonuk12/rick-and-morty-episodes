import React from 'react';
import styles from './index.module.scss';

const Dropdown = ({ value, onChange, list }) => {
    return (
        <select
            value={value || ''}
            className={styles.input}
            onChange={onChange}
        >
            {
                list.map((value, index) => {
                    return (
                        <option key={index} value={value}>{value}</option>
                    )
                })
            }
        </select>
    );
}

export default Dropdown;