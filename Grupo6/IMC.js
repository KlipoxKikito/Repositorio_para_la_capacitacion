const readline = require('readline');

// Create an interface to read input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate BMI
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Function to get user input and calculate BMI
function getUserInput() {
    rl.question('Enter your weight in kilograms: ', (weight) => {
        rl.question('Enter your height in meters: ', (height) => {
            const bmi = calculateBMI(parseFloat(weight), parseFloat(height));
            console.log(`Your BMI is: ${bmi.toFixed(2)}`);
            rl.close();
        });
    });
}

// Start the process
getUserInput();