import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { get } from '../../api/episode';
import { EpisodeCard } from '../../reusables';

const Home = () => {
    const [episodes, setEpisodes] = useState([]);

    const prepare = async () => {
        let arr = [];
        for (let i = 1; i < 4; i++) {
            const { results } = await get(i);
            arr = arr.concat(results);
        }
        setEpisodes(arr);
    }

    useEffect(() => {
        prepare();
    }, []);

    return (
        <div className={styles.container}>
            {
                episodes.length > 0 &&
                episodes.map((value, index) => {
                    return <EpisodeCard key={index} episode={value} />
                })
            }
        </div>
    );
}

export default Home;