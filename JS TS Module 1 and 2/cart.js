let isUserLoggedIn = true;
let isCardEmpty = false;
let isPaymentMethodAdded = false;
let isAddressSaved = true;

let isEligibleForCheckout = isUserLoggedIn && !isCardEmpty && isPaymentMethodAdded && isAddressSaved;
console.log(`can checkout: ${isEligibleForCheckout}`);

let isPaymentMethodMissing = !isPaymentMethodAdded;
console.log(`is payment method missing: ${isPaymentMethodMissing}`);