// Average state income tax rates (as decimals)
const stateTaxRates = {
    AL: 0.05, AK: 0.00, AZ: 0.04, AR: 0.06, CA: 0.09,
    CO: 0.04, CT: 0.07, DE: 0.06, FL: 0.00, GA: 0.06,
    HI: 0.07, ID: 0.06, IL: 0.05, IN: 0.03, IA: 0.06,
    KS: 0.05, KY: 0.05, LA: 0.04, ME: 0.07, MD: 0.05,
    MA: 0.05, MI: 0.04, MN: 0.07, MS: 0.05, MO: 0.05,
    MT: 0.06, NE: 0.05, NV: 0.00, NH: 0.00, NJ: 0.06,
    NM: 0.05, NY: 0.06, NC: 0.05, ND: 0.03, OH: 0.04,
    OK: 0.05, OR: 0.07, PA: 0.03, RI: 0.05, SC: 0.05,
    SD: 0.00, TN: 0.00, TX: 0.00, UT: 0.05, VT: 0.06,
    VA: 0.06, WA: 0.00, WV: 0.05, WI: 0.06, WY: 0.00
};

// Function to calculate the hours needed
function calculate() {
    // Get input values
    const expense = parseFloat(document.getElementById('expense').value);
    const hourlyWage = parseFloat(document.getElementById('hourlyWage').value);
    const state = document.getElementById('state').value;

    // Validate inputs
    if (isNaN(expense) || isNaN(hourlyWage) || hourlyWage <= 0 || !state) {
        document.getElementById('result').textContent = "Enter valid numbers and select your state!";
        return;
    }

    // Get the tax rate for the selected state
    const taxRate = stateTaxRates[state];

    // Calculate net hourly wage after taxes
    const netHourlyWage = hourlyWage * (1 - taxRate);

    // Calculate hours needed to afford the expense
    const hoursNeeded = (expense / netHourlyWage).toFixed(2);

    // Display the result
    const resultText = `You need to work ${hoursNeeded} hours to afford this.`;
    document.getElementById('result').textContent = resultText;
}
