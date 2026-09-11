import axios from 'axios';

export default axios.create({
    baseURL:'http://34.238.28.137:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
