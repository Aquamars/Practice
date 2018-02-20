class MinStack {
    constructor(){
       this.ary=[];
       this.min=null; 
    }    
    push(x){
        this.ary.push(x);
        if(this.min === null || this.min > x) this.min = x;
    }
    pop(){
        this.ary.pop();
        this.min = null;
        this.ary.forEach(n=>{
            if(this.min === null || this.min > n)this.min = n;
        });
    }
    top(){
        return this.ary[this.ary.length-1];
    }
    getMin(){
        return this.min;
    }
}
