import React from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const EpisodeCard = ({ episode }) => {
    return (
        <div className={styles.container}>
            {
                episode &&
                <>
                    <div className={styles.episode}>{episode.episode}</div>
                    <div className={styles.name}>{episode.name}</div>
                    <div className={styles.airDate}>{episode.air_date}</div>
                    <Link to={`/episodes/${episode.id}`} className={styles.details}>Go to details</Link>
                </>
            }
        </div>
    );
}

export default EpisodeCard;