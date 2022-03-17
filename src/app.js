console.log(process.cwd())

function sayHi(name) {
    console.log(`hello ${name}!`)
    return `hello ${name}!`
}

module.exports = { sayHi }
