import {get, post} from './method';

const url = '';

let request = {
    
    getSomething: (data) => get(`${url}/someUrl`, data),

    postSomething: (data) => post(`${url}/someUrl`, data),

}

export default request