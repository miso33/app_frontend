import axios from 'axios';

export default function post(data, url) {
    return axios.put(url, data)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error
        });
}