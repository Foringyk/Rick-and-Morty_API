import { 
    HTTP, HTTPS, RMAPI_ROOT, RMAPI_CHARACTER, 
    GUIDE_IMG_EXTENSION, URL_IMG_PERSON,
    RMAPI_PARAM_PAGE
} from "../constants/api"

export const getCharacterPageId = url => {
    const position = url.lastIndexOf(RMAPI_PARAM_PAGE);
    const id = url.slice(position + RMAPI_PARAM_PAGE.length);

    return Number(id);
}

const checkProtocol = url => {
    if(url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}

const getId = (url, category) => {
    const protocol = checkProtocol(url)

    const id = url
        .replace(protocol+RMAPI_ROOT+category, '')
        .replace(/\//g, '')
    return id;
}

export const getCharacterId = url => getId(url, RMAPI_CHARACTER);

export const getCharacterImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;