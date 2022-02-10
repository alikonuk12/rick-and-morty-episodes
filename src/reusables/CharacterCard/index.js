import React from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ character }) => {
    const navigate = useNavigate();
    const handleClickName = () => navigate(`/characters/${character.id}`);
    
    return (
        <div className={styles.container}>
            {
                character &&
                <div className={styles.card}>
                    <img className={styles.image} src={character.image} alt={character.name} />
                    <div>
                        <div className={styles.name} onClick={handleClickName}>{character.name}</div>
                        <div className={styles.statusContainer}>
                            {<div className={character.status === 'Alive' ? styles.greenDot : character.status === 'Dead' ? styles.redDot : styles.lightgrayDot} />}
                            <div className={styles.status}>{character.status} - {character.species}</div>
                        </div>
                        <div className={styles.subTitle}>Last known location:</div>
                        <div className={styles.location}>{character.location.name}</div>
                        <div className={styles.subTitle}>First seen in:</div>
                        <div className={styles.origin}>{character.origin.name}</div>
                    </div>
                </div>
            }
        </div>
    );
}

export default CharacterCard;