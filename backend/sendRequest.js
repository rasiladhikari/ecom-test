import axios from 'axios';

let name = 'ruth';
let email = 'ruth@gmail.com';
let password = 'roshan';
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}
const {data} = await axios.post('http://localhost:3000/api/v1/users/register', {name, email, password}, config)
