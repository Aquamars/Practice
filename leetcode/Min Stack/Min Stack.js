/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.ary=[];
    this.min=null;
};
/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.ary.push(x);
    if(this.min === null || this.min > x) this.min = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.ary.pop();
    this.min = null;
    this.ary.forEach(n=>{
        if(this.min === null || this.min > n)this.min = n;
    });
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.ary[this.ary.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */