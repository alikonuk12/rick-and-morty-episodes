import axios from 'axios';
import { baseUrl } from '../constant';

const getById = async _id => {
    try {
        const config = {
            baseURL: baseUrl,
            url: `/episode/${_id}`,
            method: 'GET'
        };

        const response = await axios(config);
        
        const result = response.data;
        return result;
    } catch (e) {
        return e;
    }
}

export default getById;