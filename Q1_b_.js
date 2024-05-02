/*
Write a program to set values for height in inches and weight in pounds, 
then convert the values to centimeters and kilos, outputting the results to the console: 
a. 1 inch is equal to 2.54 cm
b. 2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) 
divided by squared height (in meters). Output the results to the console.
*/

// Given conversion factors
const inchesToCm = 2.54;
const poundsToKilo = 0.453592;

// Input values
let heightInInches = 70; // Example height in inches
let weightInPounds = 160; // Example weight in pounds

// Convert height and weight
let heightInCm = heightInInches * inchesToCm;
let weightInKilo = weightInPounds * poundsToKilo;

// Calculate BMI
let heightInMeters = heightInCm / 100;
let bmi = weightInKilo / (heightInMeters * heightInMeters);

// Output results
console.log(`Height in inches: ${heightInInches} inches`);
console.log(`Weight in pounds: ${weightInPounds} pounds`);
console.log(`Height in centimeters: ${heightInCm} cm`);
console.log(`Weight in kilograms: ${weightInKilo} kg`);
console.log(`BMI: ${bmi.toFixed(2)}`);
