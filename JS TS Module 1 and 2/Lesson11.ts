class product {
  //properties
  name: string;
  price: number;
  inStock: boolean;

  //constructor
  constructor (name: string, price: number, inStock: boolean) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
  }
  //Method
showProducts() {
  console.log(`=== Product Details ===`);
  console.log(`Name: ${this.name}`);
  console.log(`Price: ${this.price}`);
  console.log(`In Stock: ${this.inStock}`);
}
}
//Object creation
let product1 = new product("Laptop", 55000, true);
let product2 = new product("Mouse", 2500, false);

//calling the methods by object.methodName
product1.showProducts();
product2.showProducts();
