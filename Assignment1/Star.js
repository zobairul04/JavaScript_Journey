class car{

    constructor(){

    }

    star(){

        for(let row =1 ; row<= 5 ; row++){
            let star = " " ;

            for(let col=1 ; col<=row ; col++){
                star=star + "* " ;
            }
            console.log(star);
        }


    }

    num(){
        for(let row = 1 ; row<=5 ; row++){
            let num = " " ;

            for(let col =1 ; col<=row ; col++){
                num= num+col ;
            }
            console.log(num)
        }
    }


}

const c = new car()
c.star()
c.num()