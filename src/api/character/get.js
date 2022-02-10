import axios from 'axios';
import { baseUrl } from '../constant';

const get = async page => {
    try {
        const config = {
            baseURL: baseUrl,
            url: `/character?page=${page}`,
            method: 'GET'
        };

        const response = await axios(config);
        
        const { info, results } = response.data;
        return { info, results };
    } catch (e) {
        return e;
    }
}

export default get;