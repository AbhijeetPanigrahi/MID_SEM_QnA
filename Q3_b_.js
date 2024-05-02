/*
Write the JavaScript code to check whether the string value of an input is a 
validly formatted email and valid formatted phone number [+xx-xxxx5-xxx-7x]using regex.
*/

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate phone number format
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\+\d{2}-\d{4}5-\d{3}-\d{2}$/;
  return phoneRegex.test(phoneNumber);
}

// Example usage
const emailInput = "example@email.com";
const phoneInput = "+00-12345-678-90";
console.log("Email:", validateEmail(emailInput)); // Output: true
console.log("Phone:", validatePhoneNumber(phoneInput)); // Output: true

/*

Explanation:

validateEmail function uses the regular expression /^[^\s@]+@[^\s@]+\.[^\s@]+$/ to validate email format.

validatePhoneNumber function uses the regular expression /^\+\d{2}-\d{4}5-\d{3}-\d{2}$/ to validate phone number format.

test method of regular expressions is used to check if the input string matches the pattern defined by the regular expression.

*/
