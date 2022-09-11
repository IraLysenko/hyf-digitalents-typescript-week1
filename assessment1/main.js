const numbersArr = [];

for(let i=1; i<=1000; i++) {
    if(i%3 ===0 || i%5===0) {
        numbersArr.push(i);
    }
}
const result = numbersArr.reduce((x, y) => x+y, 0);

console.log(numbersArr);
console.log(result);