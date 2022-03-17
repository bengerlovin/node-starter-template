let { sayHi } = require('./app')
let os = require('os')


function sayHiAndBye(name) {
    sayHi(name)
    console.log(`.... and bye bye ${name}!!!!!!`)
}


function printUserInfo() {
    let user = os.userInfo();
    console.log(user)
}

