/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ary = [];
    for (let i=1; i<n+1;i++){
        if(i<3){
            ary.push(`${i}`)
        }else{
            if(i%3===0 && i%5===0){
                ary.push('FizzBuzz');
            }else if(i%3===0){
                ary.push('Fizz');
            }else if(i%5===0){
                ary.push('Buzz');
            }else{
                ary.push(`${i}`)
            }
        }
    }
    return ary;
};
