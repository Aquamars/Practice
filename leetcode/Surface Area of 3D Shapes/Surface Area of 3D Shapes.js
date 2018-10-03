/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    return area(grid)
};

const area = grid => {
    let res = 0;
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length;j++){
            let tmp = 0;
            if(grid[i][j] > 0) tmp = 6;
            if(grid[i][j] > 1) tmp = 6 + (grid[i][j]-1)*4;
            if(tmp > 0){                
                if(j+1<grid[i].length){
                    if(grid[i][j+1] > 0) tmp -= count(grid[i][j], grid[i][j+1]);
                }
                if(i+1 < grid.length){
                    if(grid[i+1][j] > 0) tmp -= count(grid[i][j], grid[i+1][j]);
                }       
                if(i>0 && i-1 < grid.length){
                    if(grid[i-1][j] > 0) tmp -= count(grid[i][j], grid[i-1][j]);
                }
                if(j>0 && j-1<grid[i].length){
                    if(grid[i][j-1] > 0) tmp -= count(grid[i][j], grid[i][j-1]);
                }    
            }
            res += tmp;
        }        
    }
   return res;
}

const count = (g1, g2) => g1> g2 ? g2 : g1;