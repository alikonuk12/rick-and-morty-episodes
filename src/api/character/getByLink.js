import axios from 'axios';

const getByLink = async link => {
    try {
        const response = await axios(link);
        
        const result = response.data;
        return result;
    } catch (e) {
        return e;
    }
}

export default getByLink;