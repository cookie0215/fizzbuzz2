// Do fizzbuzz!
for(let i=1; i<=16; i++){
    if( (i % 3 === 0) && (i % 5 === 0) ) console.log(`숫자${i} fizzbuzz`);    
    else if( i % 3 === 0 ) console.log(`${i} fizz`);
    else if( i % 5 === 0 ) console.log(`${i} buzz`);
    else console.log(`${i}`);
}
