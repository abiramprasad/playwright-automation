let testNames = ["Login Test", "Cart Test", "Payment Test", "Logout Test"];
let testResults = ["PASS", "FAIL", "PASS", "PASS"];
for (let i = 0; i < testNames.length; i++) {
    let emoji = testResults[i] === "PASS" ? "✅" : "❌";
    console.log(`${testNames[i]} → ${testResults[i]} ${emoji}`);
}
