// akif-validation/index.js

// Validate Email
export function isEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

// Validate Phone Number (10 digits)
export function isPhoneNumber(number) {
   const regex = /^\+?[0-9]{7,15}$/;
  return regex.test(number);
}

// Validate Strong Password (min 8 chars, letters + numbers)
export function isStrongPassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}

// Validate URL
export function isURL(url) {
  const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;
  return regex.test(url);
}

// Validate Only Letters
export function isAlpha(str) {
  const regex = /^[A-Za-z]+$/;
  return regex.test(str);
}
