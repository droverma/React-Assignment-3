import axios from 'axios';
class FilterService {
    headlines(endpoints, param, queryParam, pageNo, pageSize) {
        return axios.get(`https://newsapi.org/v2/${endpoints}?${param}=${queryParam}&apikey=722b8b3233614f0eb949fb2f810baa69&page=${pageNo}&pageSize=${pageSize}`)
    }
    sources(endpoints, pageNo, pageSize) {
        return axios.get(`https://newsapi.org/v2/${endpoints}?apikey=722b8b3233614f0eb949fb2f810baa69&page=${pageNo}&pageSize=${pageSize}`)
    }
}

export default new FilterService();