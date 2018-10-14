/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    return readBW(num);
};

const readBW = num => {
    const output = [];
    
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            const ones = Number(h * 64 + m).toString(2).split('').filter(d => d === '1').length;
            // const ones = Number(h * 64 + m).toString(2).split('');
            // console.log(ones)
            if (ones === num) output.push(m < 10 ? `${h}:0${m}` : `${h}:${m}`);
        }
    }
   return output;
};