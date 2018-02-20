/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let init='1';
    for(let i=0;i<n-1;i++){
        init = say(init);
    }
    return init;
};

const say = n => {
    if(n === '1')return '11';
    const ary = `${n}`.split(''); 
    let res='';
    let last=null;
    let count=0;
    ary.forEach((e,i)=>{
        if(last === null){
            last=e;
            count=1;
        }else if(last !== e){
            res += `${count}${last}`
            last=e;
            count=1;
            
        }else if(last === e){
            count ++; 
        }
        
        if(i === (ary.length-1)) res += `${count}${e}`;
    });
    return res;
};
