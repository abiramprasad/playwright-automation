 function validateAge(age: number) {
    console.log(`Validating the age`);
    try{
    if (age<=0) {
        throw new Error("Age cannot be negative");
    }
    else if (age>150) {
        throw new Error("Age is not realistic");
    }
        console.log(`Valid age: [${age}]`);
} 
    catch(error) {
        console.log(`${error}`);
    }
    finally {
        console.log(`age validation complete`);
    }
}
validateAge(25);
validateAge(-5);
validateAge(200);