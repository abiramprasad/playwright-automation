export class User {
    username: string;
    password: string;
    constructor (username: string, password: string) {
        this.username = username;
        this.password = password;
    }
    showDetails () {
        console.log(`Username: ${this.username}`);
        console.log(`Password: ${this.password}`);
    }
}