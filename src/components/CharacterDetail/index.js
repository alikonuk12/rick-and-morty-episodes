import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useParams } from 'react-router-dom';
import { getById } from '../../api/character';
import { getByLink } from '../../api/episode';
import { EpisodeCard, Spinner } from '../../reusables';

const CharacterDetail = () => {
    const [char, setChar] = useState(undefined);
    const [episodes, setEpisodes] = useState([]);
    const [isReady, setIsReady] = useState(false);

    const { character } = useParams();

    const prepare = async () => {
        if (character) {
            let arr = [];
            const result = await getById(character);
            setChar(result);
            for (let i = 0; i < result.episode.length; i++) {
                const ep = await getByLink(result.episode[i]);
                arr.push(ep);
            }
            setEpisodes(arr);
            setIsReady(true);
        }
    }

    useEffect(() => {
        prepare();
    }, []);

    return (
        <div>
            {
                char &&
                <>
                    <div className={styles.infoContainer}>
                        <div>
                            <img className={styles.image} src={char.image} alt={char.name} />
                        </div>
                        <div>
                            <div className={styles.name}>{char.name}</div>
                            <div className={styles.statusContainer}>
                                {<div className={char.status === 'Alive' ? styles.greenDot : char.status === 'Dead' ? styles.redDot : styles.lightgrayDot} />}
                                <div className={styles.status}>{char.status} - {char.species}</div>
                            </div>
                            <div className={styles.subContainer}>
                                <div className={styles.subTitle}>Type: </div>
                                <div className={styles.type}>{char.type}</div>
                            </div>
                            <div className={styles.subContainer}>
                                <div className={styles.subTitle}>Gender: </div>
                                <div className={styles.gender}>{char.gender}</div>
                            </div>
                            <div className={styles.titleContainer}>
                                <div className={styles.subTitle}>Last known location:</div>
                                <div className={styles.location}>{char.location.name}</div>
                            </div>
                            <div className={styles.titleContainer}>
                                <div className={styles.subTitle}>First seen in:</div>
                                <div className={styles.origin}>{char.origin.name}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.episodeContainer}>
                        <div className={styles.episodeHeader}>Episodes with {char.name}</div>
                        {
                            isReady ?
                                <div className={styles.episodes}>
                                    {
                                        episodes.map((value, index) => {
                                            return <EpisodeCard key={index} episode={value} />
                                        })
                                    }
                                </div> :
                                <div className={styles.spinnerContainer}>
                                    <Spinner />
                                </div>
                        }
                    </div>
                </>
            }
        </div>
    );
}

export default CharacterDetail;