/*
 * Complete the 'longestChain' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY words as parameter.
 */

function longestChain(words) {
    // Write your code here
    // console.log(words); 
    if(words.length == 0) return 0;
    if(words.length == 1) return 1;
    let res = 1;
    words = words.sort((a,b)=>a.length-b.length);
    
    /* first solution */
    // let ary = Array.from(words);
    // for(let i=words.length-1;i>0;i--){
    //     ary.pop()
    //     console.log(ary);
    //     res = Math.max(res,findLongest(ary,words[i],1));
    // }
    // return res;
    
    let wordSet = new Set(words);
    let wordMap = {};
    let maxChain = 0;
    words.forEach(e=>{
        let chainLen = findLongest2(wordSet, e, wordMap) + 1;
        wordMap[e] = chainLen; 
        maxChain = Math.max(maxChain,chainLen);
    });
    return maxChain;
    
}
const findLongest2 = (wordSet, word ,wordMap) => {
    let len = 0;
    console.log(word);
    for(let i=0;i<word.length;i++){
        let nextWord = word.substring(0,i)+word.substring(i+1);
        if(wordSet.has(nextWord)){
            if(wordMap[nextWord] !== undefined){
                len = Math.max(len,wordMap[nextWord]);
            }else{
                let nextWordChain = findLongest2(wordSet,nextWord,wordMap);
                len = Math.max(len, nextWordChain+1);
            }
        }
    }
    return len;
}
/* first solution */
const findLongest = (words, word, count) => {
    let res = count;
    let set = new Set(word.split(''));
    let tmp = count;
    for(let i=words.length-1;i>-1;i--){         
        if(words[i].length == word.length-1){
            if(words[i].split('').every(e=>set.has(e))){
                let ary = Array.from(words);
                ary.pop()
                tmp = Math.max(tmp,findLongest(ary,words[i],count+1));
            }
        }
    }
    return tmp;
}