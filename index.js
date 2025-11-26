// Akif's Regex Validation Package

// Validate Email
function isEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}

// Validate Phone Number (10 digits)
function isPhoneNumber(number) {
    const regex = /^[0-9]{10}$/;
    return regex.test(number);
}

// Validate Strong Password (min 8 chars, letters + numbers)
function isStrongPassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}

// Validate URL
function isURL(url) {
    const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;
    return regex.test(url);
}

// Validate Only Letters
function isAlpha(str) {
    const regex = /^[A-Za-z]+$/;
    return regex.test(str);
}

// Export all functions
module.exports = {
    isEmail,
    isPhoneNumber,
    isStrongPassword,
    isURL,
    isAlpha
};
