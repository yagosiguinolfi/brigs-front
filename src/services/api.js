import axios from 'axios';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
    baseURL: process?.env.NODE_ENV === 'development' ? 'http://brigs.duckdns.org/api/' : '/api/'
});

api.interceptors.request.use(function (request) {
    const token = localStorage.getItem('@Brigs:Token');
    if(token){
        request.headers.Authorization = `Bearer ${token}`;
    }
       return request;
    }, (error) => {
        return Promise.reject(error)

})



export default api; 