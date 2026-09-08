let x = "ZObaiRUL";
let count = 0 ;

for( let i = 0 ; i<= x.length-1 ; i++){
    if( x[i]==="a"|| x[i]==="A"|| x[i]==="E"||x[i]==="e" 
        || x[i]==="i" || x[i]==="I" ||x[i]==="o"|| x[i]==="O" ||x[i]==="u"||x[i]==="U"){
            count++ ;
        }
}
console.log(count);