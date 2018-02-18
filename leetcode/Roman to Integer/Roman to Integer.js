/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0;
    let last=0;
    s.split('').reverse().forEach(n=>{
        let tmp = convert(n);
        if(tmp<last){
            num += (last-tmp)-last;
        }else{
            num += tmp;
        }
        last = tmp;        
    })
    return num;
};

const convert = s => {
    switch(s){
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
    }
}
