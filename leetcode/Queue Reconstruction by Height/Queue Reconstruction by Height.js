/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const sorted = people.sort((a,b)=> a[0]!=b[0]?b[0]-a[0]:a[1]-b[1]);
    let res = [];
    for(let i=0;i<sorted.length;i++){
        res.splice(people[i][1], 0, people[i]);
        // console.log(res);
    }    
    return res;
};