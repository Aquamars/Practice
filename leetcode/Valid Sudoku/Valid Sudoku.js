/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    for(let i = 0; i < 9; i++){
        let ary = [];
        let ary2 = [];
        for(let j = 0; j < 9; j++){  
            if(board[i][j] !== '.'){
                if(!ary.includes(board[i][j])){
                    ary.push(board[i][j]);
                }else{
                    return false;
                }
            }
            
            if(board[j][i] !== '.'){
                if(!ary2.includes(board[j][i])){
                    ary2.push(board[j][i]);
                }else{
                    return false;
                }
            }
        }
    }
    
    for(let i = 0; i < 9; i+=3){        
        for(let j = 0; j < 9; j+=3){
           let ary = [];
           for(let x = 0; x<3; x++){
               for(let y = 0; y<3; y++){                   
                   if(board[i+x][j+y] !== '.'){
                        if(!ary.includes(board[i+x][j+y])){
                            ary.push(board[i+x][j+y]);
                        }else{
                            return false;
                        }
                   }
               }
           }
        }
    }    
    
    return true;
};
