import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, 'SEC', {
        expiresIn: '30d'
    }); // payload + your own signed token + expiration date
}

export default generateToken