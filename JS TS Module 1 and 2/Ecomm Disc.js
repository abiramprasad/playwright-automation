let memberShipType = "gold";
let originalPrice=1000;

console.log("=== Purchase Receipt ===");
console.log(`Membership Type: ${memberShipType}`);
console.log(`original price = ${originalPrice}`);

if (memberShipType === "gold") {
let discount = 0.2*originalPrice;
let finalPrice = originalPrice-discount;
console.log(`discount (20%): ${discount}`);
console.log(`final price: ${finalPrice}`);
}

else if (memberShipType === "silver") {
let discount = 0.1*originalPrice;
let finalPrice = originalPrice-discount;
console.log(`discount (10%): ${discount}`);
console.log(`final price: ${finalPrice}`);
}

else if (memberShipType === "bronze") {
let discount = 0.05*originalPrice;
let finalPrice = originalPrice-discount;
console.log(`discount (5%): ${discount}`);
console.log(`final price: ${finalPrice}`);
}

else {
console.log(`"Join now for discounts!"`);
}
console.log("Thank you for shopping with us! 🎉");
