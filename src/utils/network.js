import { HTTP, HTTPS } from "../constants/api";


export const chanheHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
}

export const getApiResourse = async (url) => {
    try {
        const res = await fetch(url);

        if(!res.ok) {
            console.error('fetch error.', res.status);
            return false;
        }

        return await res.json();
    } 
    catch (err) {
        console.error('fetch error.', err.message);
        return false;
    }
}

export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res)
                    .then(res => res.json())
    }));

    return res;
}