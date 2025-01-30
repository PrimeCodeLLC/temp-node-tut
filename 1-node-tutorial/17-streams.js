const { error } = require('console');
const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt')

// default 64kb
// last buffer - remainder
// hignWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWatermark: 90000})
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8})

stream.on('data',(result) => {
    console.log(result);
    
})

stream.on('error', (error) => console.log(error)
)