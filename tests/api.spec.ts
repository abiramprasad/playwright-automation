import {test, expect, request} from '@playwright/test';

test ('GET request - GET USER DETAILS', async ({request}) => {
    // Send GET request:
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    // Verify status code:
    expect (response.status()).toBe(200);
    console.log(`Status code is ${response.status()}`);

    // Get response body as JSON:
    const body = await response.json();
    console.log(`Response body:`, body); 

    //verify response body:
    expect(body.id).toBe(1);
    expect(body.email).toBe('Sincere@april.biz');
    console.log('✅ User data verified!');
})

test ('POST request - CREATE USER', async ({request}) => {
    // Send POST request:
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
        data: {
            name: 'Abiram',
            job: 'Automation Engineer'
        }
    });
    // Verify status code 201
    expect (response.status()).toBe(201);
    console.log(`Status code is ${response.status()} and user created successfully`);
    // Verify response:
const body = await response.json();
console.log(`created user details:`, body);

expect(body.name).toBe('Abiram');
expect(body.job).toBe('Automation Engineer');
expect(body.id).toBeDefined();
console.log('✅ User created successfully and verified!');
})

test ('GET request - user not found', async ({request}) => {
    // Send GET request:
    const response = await request.get('https://jsonplaceholder.typicode.com/users/100');   
    expect (response.status()).toBe(404);
    console.log(`Status code is ${response.status()} and user not found`);
})