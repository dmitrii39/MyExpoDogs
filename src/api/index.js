import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] = 'c90630ec-2ce5-46b9-82fc-13c7a340f17f';
axios.defaults.headers.common['x-api-key'] = '66c3dea9-7df2-4600-920a-338a909960a9';
axios.defaults.baseURL = 'https://api.thedogapi.com/v1';

export const get = async (url, params = undefined) => {
    await axios.get(url, {params});
}

export const post = async (url, body = undefined) => {
    await axios.post(url, body);
}

export const deleteRequest = async (url, params = undefined) => {
    await axios.delete(url, {params});
}

const errorHandler = () => {}