import PropTypes from 'prop-types';
import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getApiResourse } from '../../utils/network';
import { API_PERSON } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getCharacterImage } from '../../services/getCharacterData';

import UiLoading from '../../components/UI-kit/UiLoading';
import PersonageInfo from '../../components/PersonagePage/PersonageInfo';
import PersonagePhoto from '../../components/PersonagePage/PersonagePhoto';
import PersonageLinkBack from '../../components/PersonagePage/PersonageLinkBack';

import styles from './PersonagePage.module.css';

const PersonageFilms = React.lazy(() => import('../../components/PersonagePage/PersonageEpisodes')) 


const PersonagePage = ({ setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);

    const [personId, setPersonId] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    const storeData = useSelector(state => state.favoriteReducer)

    const { id } = useParams()

    useEffect(() => {
        (async () => {
            setPersonFavorite(!!storeData[id]);
            setPersonId(id);
            const res = await getApiResourse(`${API_PERSON}/${id}/`);

            if(res) {
                setPersonInfo([
                    {title: 'Gender', data: res.gender},
                    {title: 'Species', data: res.species},
                    {title: 'Status', data: res.status},
                    {title: 'Type', data: res.type}
                ]);

                setPersonName(res.name);
                setPersonPhoto(getCharacterImage(id));

                //res.film
                res.episode.length && setPersonFilms(res.episode);
            }

            setErrorApi(!res);
        })();
    }, []);

    return (
        <>
            <PersonageLinkBack />
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>

                <div className={styles.container}>
                    <PersonagePhoto
                        personPhoto={personPhoto}
                        personName={personName}
                        personId={personId}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    { personInfo && <PersonageInfo personInfo={personInfo} /> }

                    { personFilms && (
                        <Suspense fallback={<UiLoading />}>
                            <PersonageFilms personFilms={personFilms} /> 
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    )
}

PersonagePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonagePage);