export const BASE_URL =  "https://shop.com";

export function calculateDiscount (price: number, percent: number): number {
    return price - (price*percent)/100;
}

export class loginHelper {
    login(username: string, password: string) {
    console.log(`Logging in as: ${username}`);
    }
}
