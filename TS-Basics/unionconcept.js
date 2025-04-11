var userId;
userId = 111;
userId = '111';
function getUserInfo(CustomerID) {
    if (typeof CustomerID === 'string') {
        return 'string';
    }
    else {
        return 'number';
    }
}
console.log(getUserInfo('23'));
