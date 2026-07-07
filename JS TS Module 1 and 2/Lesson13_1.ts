import { BASE_URL, calculateDiscount, loginHelper } from "./helper";

console.log(`Login URL: ${BASE_URL}`);

let finalPrice = calculateDiscount(5000,10)
console.log(`final price: ${finalPrice}`);

let helper = new loginHelper();
helper.login ("admin@test.com", "Admin@123");