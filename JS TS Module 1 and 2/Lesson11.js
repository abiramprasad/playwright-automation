"use strict";
class user {
    username;
    password;
    isActive;
    //constructor
    constructor(username, password, isActive) {
        this.username = username;
        this.password = password;
        this.isActive = isActive;
    }
    //method creation
    showDetails() {
        console.log(`username: ${this.username}`);
        console.log(`password: ${this.password}`);
        console.log(`isActive: ${this.isActive}`);
    }
}
//object creation
let user1 = new user("abc@xyz.com", "admin123", true);
let user2 = new user("def@qwe.com", "monzi678", false);
//calling the methods: object.method name
user1.showDetails();
user2.showDetails();
