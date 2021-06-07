const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Creates a Password using Bcrypt
const generatePassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);

}

// Check Password
const validatePassword = (password) => {
    return password.length >= 5 && password.length <=30;
};

const checkPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

const generateUserToken = (userId, secret) => {
    const token = jwt.sign({id: userId}, secret);
    return token;
}

const verifyUserToken = (token, secret) => {
    const { id } = jwt.verify(token, secret);
    
    return id;
}

module.exports = {generatePassword, checkPassword, generateUserToken, validatePassword, verifyUserToken}