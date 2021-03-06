const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    console.log('Valid registr===>',data)
    let errors = {};
    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.tel = !isEmpty(data.tel) ? data.tel : '';
    data.role = !isEmpty(data.role) ? data.role : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

    if(!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
        errors.firstName = 'Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.firstName)) {
        errors.firstName = 'Name field is required';
    }

    if(!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
        errors.lastName = 'Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.lastName)) {
        errors.lastName = 'Name field is required';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isLength(data.tel, { min: 2, max: 30 })) {
        errors.tel = 'Tel must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.tel)) {
        errors.tel = 'Tel field is required';
    }

    if(!Validator.isLength(data.role, { min: 2, max: 30 })) {
        errors.role = 'Role must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.role)) {
        errors.role = 'Role field is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
        errors.password_confirm = 'Password must have 6 chars';
    }

    if(!Validator.equals(data.password, data.password_confirm)) {
        errors.password_confirm = 'Password and Confirm Password must match';
    }

    if(Validator.isEmpty(data.password_confirm)) {
        errors.password_confirm = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}