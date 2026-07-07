let products = [
    {name: "laptop", price: 55000, inStock: true},
    {name: "mouse", price: 1500, inStock: true},
    {name: "Keyboard", price: 2500, inStock: false}
];
console.log(`=== Product List ===`);

for (let product of products) {
    console.log(`${product.name} - ₹${product.price} - In Stock: ${product.inStock}`);
    if (product.inStock === true) {
    console.log(`${product.name} ✅ Available`);
}
else {    
    console.log(`${product.name} ❌ Out of Stock`);
}
}   
