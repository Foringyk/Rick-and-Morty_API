import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '../../hoc-helpers/withErrorApi';

import CharactersList from '../../components/CharactersPage/CharactersList'
import CharactersNavigation from '../../components/CharactersPage/CharactersNavigation';

import { getApiResourse, chanheHTTP } from '../../utils/network';
import { getCharacterId, getCharacterImage, getCharacterPageId } from '../../services/getCharacterData';
import { API_CHARACTER } from '../../constants/api';
import { useQueryParams } from '../../hooks/useQueryParams';

const CharactersPage = ({ setErrorApi }) => {
    const [characters, setCharacters] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(null);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResponse = async (url) => {
        const res = await getApiResourse(url)

        if(res) {
            const charactersList = res.results.map(({ name, url }) => {
                const id = getCharacterId(url)
                const img = getCharacterImage(id)
    
                return {
                    id,
                    name,
                    img
                }
            })
            
            setCharacters(charactersList);
            setPrevPage(chanheHTTP(res.info.prev));
            setNextPage(chanheHTTP(res.info.next));
            setCounterPage(getCharacterPageId(url))
        }
        

        setErrorApi(!res);
    }

    useEffect(() => {
        getResponse(API_CHARACTER + queryPage)
    }, [])

    return (
        <>
            <CharactersNavigation 
                getResponse={getResponse}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {characters && <CharactersList characters={characters} />}
        </>
    )
}

CharactersPage.propTypes = {
    setErrorApi: PropTypes.func
}


export default withErrorApi(CharactersPage);