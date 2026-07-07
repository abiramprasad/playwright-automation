let accountBalance = 15000;
let withdrawalAmount = 5000;
let enteredPin = 1234;
const correctPin = 1234;
let dailyWithdrawalLimit = 20000;

if (enteredPin !== correctPin) {
    console.log("❌ Incorrect PIN! Access denied.");
} else if (withdrawalAmount > dailyWithdrawalLimit) {
    console.log("❌ Exceeds daily withdrawal limit!");
} else if (withdrawalAmount > accountBalance) {
    console.log("❌ Insufficient funds!");
} else {
    let balance = accountBalance - withdrawalAmount;
    console.log(`✅ Please collect ₹${withdrawalAmount}. Remaining balance: ₹${balance}`);
}