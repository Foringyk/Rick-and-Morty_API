//common
export const HTTPS = 'https://';
export const HTTP = 'http://';

//rick and morty api
export const RMAPI_ROOT = 'rickandmortyapi.com/api';
export const RMAPI_CHARACTER = '/character';
export const RMAPI_PARAM_PAGE = '/?page=';
export const RMAPI_PARAM_SEARCH = '/?search=';

export const API_CHARACTER = HTTPS + RMAPI_ROOT + RMAPI_CHARACTER + RMAPI_PARAM_PAGE;
export const API_PERSON = HTTPS + RMAPI_ROOT + RMAPI_CHARACTER;
export const API_SEARCH = HTTPS + RMAPI_ROOT + RMAPI_CHARACTER + RMAPI_PARAM_SEARCH;


//visualguide
const GUIDE_ROOT_IMG = 'https://rickandmortyapi.com/api';
const GUIDE_CHARACTER = '/character/avatar';
export const GUIDE_IMG_EXTENSION = '.jpeg';

export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_CHARACTER;
