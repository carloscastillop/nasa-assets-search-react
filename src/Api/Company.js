import axios from 'axios';

const company = (baseURL = './', form = false) => {
    return axios.create({
        baseURL: baseURL,
        headers: {
            'Content-Type': form ? 'x-www-form-urlencoded' : 'application/json'
        }
    });
};

export default company;
