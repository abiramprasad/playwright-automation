"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
let user1 = new user_1.User("john@test.com", "pass123");
let user2 = new user_1.User("john@test.com", "pass123");
user1.showDetails();
user2.showDetails();
