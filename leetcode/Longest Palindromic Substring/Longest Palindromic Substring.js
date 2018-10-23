/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    return longestPal(s);
};

const longestPal = s => {    
   
   let res = '';
   
   const checkPal = (l ,r) => {
       while(l >=0 && r < s.length){
           if(s[l] == s[r]){
               l--;
               r++;
           }else{
               break;
           }
       }
       
       l++;
       r--;
       if(r-l+1 > res.length) res = s.substring(l, r+1);
   }
   
   for(let i=0; i<s.length;i++){
       
       if(i>0 && s[i] == s[i-1]) checkPal(i-1, i);
       
        checkPal(i, i);
   }
   return res;
}