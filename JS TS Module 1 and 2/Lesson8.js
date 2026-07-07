function checkPrice(productName, price) {
    if (price < 1000) {
        console.log(`✅ ${productName} is affordable at ₹${price}`);
    } else {
        console.log(`❌ ${productName} is not affordable at ₹${price}`);
    }
}
checkPrice("Pen", 50);
checkPrice("Book", 500);
checkPrice("Laptop", 55000);