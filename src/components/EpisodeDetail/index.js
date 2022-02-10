import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { useParams } from 'react-router-dom';
import { Button, CharacterCard, Filter, Spinner, Dropdown } from '../../reusables';
import { getById } from '../../api/episode';
import { getByLink } from '../../api/character';

const EpisodeDetail = () => {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const [status, setStatus] = useState(undefined);
    const [gender, setGender] = useState(undefined);

    const statusArr = ['Select Status', 'Alive', 'Dead', 'unknown'];
    const genderArr = ['Select Gender', 'Female', 'Male', 'Genderless', 'unknown'];

    const { episode } = useParams();

    const handleChangeSearch = e => setSearch(e.target.value);
    const handleClickSort = () => setSort(!sort);

    const handleChangeStatus = e => setStatus(e.target.value);
    const handleChangeGender = e => setGender(e.target.value);

    const decrease = (a, b) => {
        if (a.name < b.name) return -1;
        if (b.name < a.name) return 1;
        return 0;
    }

    const increase = (a, b) => {
        if (a.name < b.name) return 1;
        if (b.name < a.name) return -1;
        return 0;
    }

    const prepare = async () => {
        if (episode) {
            let arr = [];
            const result = await getById(episode);
            for (let i = 0; i < result.characters.length; i++) {
                const char = await getByLink(result.characters[i]);
                arr = arr.concat(char);
            }
            setCharacters(arr);
            setIsReady(true);
        }
    }

    useEffect(() => {
        prepare();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.filterButtonContainer}>
                <Filter value={search} onChange={handleChangeSearch} />
                <Dropdown value={status} list={statusArr} onChange={handleChangeStatus} />
                <Dropdown value={gender} list={genderArr} onChange={handleChangeGender} />
                <Button text={sort ? 'A -> Z' : 'Z -> A'} onClick={handleClickSort} />
            </div>
            <div className={styles.episodesContainer}>
                {
                    isReady && characters.length > 0 ?
                        <>
                            {
                                characters
                                    .filter(el => el.name.toLowerCase().startsWith(search.toLowerCase()))
                                    .filter(el => {
                                        if (status && !status.startsWith('Select')) {
                                            return el.status === status;
                                        } else {
                                            return el;
                                        }
                                    })
                                    .filter(el => {
                                        if (gender && !gender.startsWith('Select')) {
                                            return el.gender === gender;
                                        } else {
                                            return el;
                                        }
                                    })
                                    .sort(sort ? decrease : increase)
                                    .map((value, index) => {
                                        return <CharacterCard key={index} character={value} />
                                    })
                            }
                        </>
                        :
                        <div className={styles.spinnerContainer}>
                            <Spinner />
                        </div>

                }
            </div>
        </div>
    );
}

export default EpisodeDetail;