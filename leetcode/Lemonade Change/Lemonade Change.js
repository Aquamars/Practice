/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    return lemon(bills);
};

const lemon = bills => {
    let bill = {};
    bill[bills[0]] = 1;
    for(let i=1; i<bills.length;i++){
        let e = bills[i];
        if(e == 5) bill[5] = (bill[5] === undefined) ? 1 : bill[5]+1;
        if(e == 10){
            if(bill[5]>0){
                bill[5] = bill[5]-1;
                bill[10] = (bill[10] === undefined) ? 1 : bill[10]+1;
            }else{
                return false;
            }
        }
        if(e == 20){            
            if(bill[10]>0 && bill[5]>0){
                bill[5] = bill[5]-1;
                bill[10] = bill[10]-1;
            }else if(bill[5]>2){
                bill[5] = bill[5]-3;
            }else{
                return false;
            }
            bill[20] = (bill[20] === undefined) ? 1 : bill[20]+1;
        }
    }
    return true;
}