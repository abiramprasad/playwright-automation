// Complete test scenario: Validate a hotel booking

const hotelName = "Grand Palace Hotel";
const roomsAvailable = 5;
const pricePerNight = 3500;
const numberOfNights = 3;
const discountCode = "SAVE10";
const discountPercent = 10;

// Step 1: Calculate costs
let totalBeforeDiscount = pricePerNight * numberOfNights;
console.log(`Total before discount: ₹${totalBeforeDiscount}`);

// Step 2: Apply discount
let discountAmount = (totalBeforeDiscount * discountPercent) / 100;
let finalAmount = totalBeforeDiscount - discountAmount;
console.log(`Discount applied: ₹${discountAmount}`);
console.log(`Final amount: ₹${finalAmount}`);

// Step 3: Validate booking conditions
let hasRoomsAvailable = roomsAvailable > 0;
let isPriceReasonable = finalAmount <= 15000;
let canBook = hasRoomsAvailable && isPriceReasonable;

console.log(`Rooms available: ${hasRoomsAvailable}`);
console.log(`Price within budget: ${isPriceReasonable}`);
console.log(`Booking can proceed: ${canBook}`);

// Step 4: Generate test report
let testResult = canBook === true ? "PASS" : "FAIL";
console.log(`\n TEST RESULT: ${testResult} `);