/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    return sort(A);
};

const sort = A => {
    let even = [];
    let odd = [];
    A.forEach(e=>{
        if(e%2==0){
            even.push(e);
        }else{
            odd.push(e);
        }
    })
    return even.concat(odd);
}