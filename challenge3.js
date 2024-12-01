function calculateNetSalary(basicSalary, benefits) {
    // SHIF Deductions Table
    const nhifRates = [
        { upperLimit: 5999, rate: 150 },
        { upperLimit: 7999, rate: 300 },
        { upperLimit: 11999, rate: 400 },
        { upperLimit: 14999, rate: 500 },
        { upperLimit: 19999, rate: 600 },
        { upperLimit: 24999, rate: 750 },
        { upperLimit: 29999, rate: 850 },
        { upperLimit: 34999, rate: 900 },
        { upperLimit: 39999, rate: 950 },
        { upperLimit: 44999, rate: 1000 },
        { upperLimit: 49999, rate: 1100 },
        { upperLimit: 59999, rate: 1200 },
        { upperLimit: 69999, rate: 1300 },
        { upperLimit: 79999, rate: 1400 },
        { upperLimit: 89999, rate: 1500 },
        { upperLimit: 99999, rate: 1600 },
        { upperLimit: Infinity, rate: 1700 },
    ];
    //PAYEE rates table
    const payeeRates = [
        { upperLimit: 24000, rate: 0.1 },
        { upperLimit: 32333, rate: 0.25 },
        { upperLimit: 500000, rate: 0.3 },
        { upperLimit: 800000, rate: 0.325 },
        { upperLimit: Infinity, rate: 0.35 },
    ];

    const grossSalary = basicSalary + benefits;


    let nhifDeduction = 0;
    for (const { upperLimit, rate } of nhifRates) {
        if (grossSalary <= upperLimit) {
            nhifDeduction = rate;
            break;
        }
    }
    let nssfDeduction = 0;
    const tier1Limit = 6000;
    const tier2Limit = 12000;
    const tier1Rate = 0.06;
    const tier2Rate = 0.06;

    if (grossSalary > 0) {
        nssfDeduction += Math.min(grossSalary, tier1Limit) * tier1Rate;
        if (grossSalary > tier1Limit) {
            nssfDeduction += Math.min(grossSalary - tier1Limit, tier2Limit) * tier2Rate;
        }
    }
    nssfDeduction = Math.min(nssfDeduction, 1080);
    let payee = 0;
    let remainingSalary = grossSalary;
    for (const { upperLimit, rate } of payeeRates) {
        if (remainingSalary <= 0) break;

        if (grossSalary <= upperLimit) {
            payee += remainingSalary * rate;
            break;
        } else {
            const taxableAmount = upperLimit - (rate.upperLimit === Infinity ? grossSalary : 0);
            payee += taxableAmount * rate;
            remainingSalary -= taxableAmount;
        }
    }
    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);

    // Return detailed breakdown
    return {
        basicSalary,
        benefits,
        grossSalary,
        payee,
        nhifDeduction,
        nssfDeduction,
        netSalary,
    };
}
const salaryDetails = calculateNetSalary(24000, 8000);

for (const [key, value] of Object.entries(salaryDetails)) {
    console.log(`${key}: ${value}`);
}