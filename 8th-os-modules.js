//os
const os = require('os')

//info about user
const user = os.userInfo()
//console.log(user)

//returns system uptime

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
