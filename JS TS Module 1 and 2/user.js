export class User {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    showDetails() {
        console.log(`Username: ${this.username}`);
        console.log(`Password: ${this.password}`);
    }
}
