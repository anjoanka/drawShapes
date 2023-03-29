const len = 7;
const lens = Math.ceil(len/2);

let square = '';
for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
        square += '*';
    }
    square += '\n';
}
console.log(square);

///////////


for(let i = 0; i < lens; i++){
    const stars = len - (i * 2);
    console.log(' '.repeat(i) + '*'.repeat(stars))
}

///////////

for(let i = lens - 1; i >= 0; i--){
    const stars = len - (i * 2);
    console.log(' '.repeat(i) + '*'.repeat(stars))
}

////////////

for(let i = 0; i < lens; i++){
    const stars = i + 1;
    console.log(' '.repeat(lens - stars) + '*'.repeat(stars))
}
for(let i = lens - 2; i >= 0; i--){
    const stars = i + 1;
    console.log(' '.repeat(lens - stars) + '*'.repeat(stars))
}

/////////////// 

for(let i = 0; i < lens; i++){
    const stars = i + 1;
    console.log('*'.repeat(stars))
}
for(let i = lens - 2; i >= 0; i--){
    const stars = i + 1;
    console.log('*'.repeat(stars))
}

