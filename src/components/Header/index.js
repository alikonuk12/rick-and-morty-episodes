import React from 'react';
import styles from './index.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import Banner from '../../assets/img/banner.png';

const Header = () => {
    const navigate = useNavigate();

    const handleClickImg = () => navigate('/');
    return (
        <header>
            <div className={styles.header}>
                <img src={Banner} onClick={handleClickImg} className={styles.img} alt='banner' />
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