//default values
let message = '';
let errorReturn = '';

// Error object to be returned
export const errorObject = {
    error: errorReturn,
    message: message,
};

// valid and invalid decoration

const makeValid = (field, error) => {
    const array = field.classList;
    errorObject.error = error;
    errorObject.message = '';
    array.remove('error-box');
}

const makeInvalid = (field, message, error) => {
    errorObject.error = error;
    errorObject.message = message;
    field.classList.add('error-box');
}

// UTILS
const validateEmpty = (field, error) => {
    const value = field.value;
    if (value.trim() === '') {
        makeInvalid(field, 'Please do not leave blank', error);
        return false;
    } else {
        makeValid(field, error)
        return true;
    }
}

const containsCharacters = (field, code, error) => {
    let regEx;
    switch (code) {
        case 1:
            //contains letters
            regEx = /(?=.*[a-zA-Z])/;
            return matchWithRegEx(field, regEx, "Must contain at least one letter", error);
        case 2:
            // contain letters and numbers
            regEx = /(?=.*[a-zA-Z])(?=.*\d)/;
            return matchWithRegEx(field, regEx, "Must contain at least one letter and one number", error);
        case 3:
            //contain lower case, uppercase and numbers
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
            return matchWithRegEx(field, regEx, "Must contain at least one lower case letter, one upper case letter and one number", error);
        case 4:
            //contain lowercase, uppercase, numbers and symbols
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/;
            return matchWithRegEx(field, regEx, "Must contain at least one lower case letter, one upper case letter, one number and one special character", error);
        case 5:
            // for emails
            // eslint-disable-next-line no-useless-escape
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return (matchWithRegEx(field, regEx, "Invalid Email", error));
        case 6:
            // check if only numbers
            // eslint-disable-next-line no-useless-escape
            regEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
            return matchWithRegEx(field, regEx, "Please enter a valid phone number", error);
        default:
            return false
    }
};

const matchWithRegEx = (field, regEx, message, error) => {
    if (field.value.toLowerCase().match(regEx)) {
        makeValid(field, error);
        return true;
    } else {
        makeInvalid(field, message, error);
        return false;
    }
};

//INDIVIDUAL VAL
export const validateName = (field, error) => {
    return validateEmpty(field, error);
}

export const validateEMail = (field, error) => {
    if (!containsCharacters(field, 5, error)) {
    } else {
        makeValid(field, error);
        return true;
    }
};


export const validateForm = e => {
    return validateName(e.target[0], e.target[0].name + 'Error') &&
        validateEMail(e.target[1], e.target[1].name + 'Error') &&
        validateName(e.target[2], e.target[2].name + 'Error')
}



