let x = [1,1,2,3,4,4,5,5];
let z = [];

for( let i = 0 ; i<= x.length-1 ; i++){
    let p = x[i];

    if (z.includes(p)=== false){
        z.push(p);
    }
}
console.log(z);