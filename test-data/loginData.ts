export const loginData = [
    {
    scenario: 'Valid credentails', 
    username: 'student',
    password: 'Password123',
    expected: 'pass'
    },
        {
    scenario: 'invalid username',
    username: 'stuwrongUser',
    password: 'Password123',
    expected: 'fail',
    errorText: 'Your username is invalid!'
    },
            {
    scenario: 'invalid password',
    username: 'student',
    password: 'wrongPassword',
    expected: 'fail',
    errorText: 'Your password is invalid!'
    }
];
