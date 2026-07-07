export class Product {
    name: string;
    price: number;
    inStock: boolean;

    constructor (name: string, price: number, inStock: boolean) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
    }
    showProduct() {
        console.log(`Product is: ${this.name}, price is: ${this.price}, in stock? ${this.inStock}`)
    }
}
