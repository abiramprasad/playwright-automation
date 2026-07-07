interface TestUser { 
    userName: string;
    password: string;
    role: string;
    isActive: boolean;
}

let users: TestUser[] = [
    {userName: "Abi", password: "admin123", role: "Admin", isActive: true}, // 
    {userName: "Ram", password: "123456", role: "guest", isActive: true},
    {userName: "Prasad", password: "airbus", role: "guest", isActive: false}
];

for (let user of users) {
    console.log(`${user.userName}, password is: ${user.password}, role: ${user.role}, is active: ${user.isActive}`);
}
