class car {
    constructor( name,id) {
        this.name=name ;
        this.id=id ;
    }

    hello(price){
        console.log("HI = ",this.name);
        console.log("your id  = ",this.id);
        const p = price+20 ;
        console.log("your price is = " , p);
    }
}

const c = new car ("ABID","A11");
const AK = c.hello(344);
console.log(AK);

class tree extends (car){
   
}
const t = new tree("tree","t-3");
t.hello(344)

export{ car };