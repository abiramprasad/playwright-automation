const isLoggedIn = false;

function getLoginMessages(isLoggedInValue) {
    return isLoggedInValue
        ? ["Welcome", "Dashboard"]
        : ["a", "a"];
}

if (require.main === module) {
    getLoginMessages(isLoggedIn).forEach(message => console.log(message));
}

module.exports = { getLoginMessages };
