import axios from 'axios'

export function getList(){
    return axios.get('/list');
}