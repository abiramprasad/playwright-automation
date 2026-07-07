function waitFor(seconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
// creating function with async
async function runCheckOutTest () {
    console.log (`Opening browser`);
    //waiting for 2 seconds
    await waitFor (2);

    console.log (`Navigating to shop`);
    await waitFor (2);

    console.log (`Adding item to cart`);
    await waitFor (2);

    console.log (`Proceeding to checkout`);
    await waitFor (2);

    console.log (`Test complete`);
}
//calling the function
runCheckOutTest();