import React from 'react';
import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';
import Banner from '../../assets/img/banner.png';

const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <NavLink
                    exact='true'
                    to="/" className={navData => navData.isActive ? styles.headerLinkActive : styles.headerLink}
                >
                    <img src={Banner} className={styles.img} alt='banner' />
                </NavLink>
                <NavLink
                    exact='true'
                    to="/"
                    className={navData => navData.isActive ? styles.headerLinkActive : styles.headerLink}
                >
                    Home
                </NavLink>
            </div>
        </header>
    )
}

export default Header;