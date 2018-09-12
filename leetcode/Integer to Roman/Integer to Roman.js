/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    return conv(num);
 };
 
 const conv = num => {
     const ary = num.toString().split('').reverse();
     let result='';
     ary.map((e,i)=>(result = roma(e,i) + result));
     return result;
 };
 
 const roma = (num, i) => {
     const n = (num>4 ? num-5 : num);
     let result = '';
     let five = '';
     let one = '';
     let ten = '';
     switch(i){                    
         case 0:
             five = 'V';
             one = 'I';
             ten = 'X';
             break;
         case 1:
             five = 'L';
             one = 'X';
             ten = 'C';
             break;
         case 2:
             five = 'D';
             one = 'C';
             ten = 'M';
             break;
         case 3:
             one = 'M';
             break;
     }
     
     for(let x=0; x<n; x++){
         result += one;
     }
     
     if(num >= '5' && num < '9') result = five + result;
     if(num === '4') result = one + five; 
     if(num === '9') result = one + ten;
     return result;
 };