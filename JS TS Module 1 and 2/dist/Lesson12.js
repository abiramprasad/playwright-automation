"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function waitFor(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
// creating function with async
function runCheckOutTest() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Opening browser`);
        //waiting for 2 seconds
        yield waitFor(2);
        console.log(`Navigating to shop`);
        yield waitFor(2);
        console.log(`Adding item to cart`);
        yield waitFor(2);
        console.log(`Proceeding to checkout`);
        yield waitFor(2);
        console.log(`Test complete`);
    });
}
//calling the function
runCheckOutTest();
