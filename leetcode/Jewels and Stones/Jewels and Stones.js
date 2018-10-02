/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    return findJ(J,S);
 };
 
 const findJ = (J,S) => {
     const aryJ = J.split('');
     const aryS = S.split('');
     
     const re = aryS.filter(e=>{
         for(let i=0;i<aryJ.length;i++){
             if(aryJ[i]===e) return true;
         }
         return false
     });
     return re.length;
 }