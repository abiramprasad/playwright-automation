const assert = require("assert");
const { getLoginMessages } = require("./ifElse");

const cases = [
    {
        isLoggedIn: true,
        expected: ["Welcome", "Dashboard"],
    },
    {
        isLoggedIn: false,
        expected: ["a", "a"],
    },
];

cases.forEach(({ isLoggedIn, expected }) => {
    const actual = getLoginMessages(isLoggedIn);
    assert.deepStrictEqual(
        actual,
        expected,
        `Expected getLoginMessages(${isLoggedIn}) to return ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`
    );
});

console.log("ifElse tests passed.");
