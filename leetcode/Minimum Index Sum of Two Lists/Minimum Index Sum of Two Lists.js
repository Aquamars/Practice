/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    return findRes(list1, list2);
};

const findRes = (l1,l2) => {
    let long = l1;
    let short = l2;
    if(l1.length < l2.length){
        long = l2;
        short = l1;
    }
    
    let res = [];
    let count = 2001;
    
    short.forEach((e,i)=>{
        if(long.indexOf(e) !== -1){
            
            if((long.indexOf(e) + i) === count){
                res.push(e);
            }
            
            if((long.indexOf(e) + i) < count){
                res = [e];
                count = long.indexOf(e) + i;
            }            
        }        
    });
    return res;
}