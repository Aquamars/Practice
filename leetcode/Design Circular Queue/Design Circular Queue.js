/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
// var MyCircularQueue = function(k) {
//     this.ary=[];
//     this.size=k;
// };

class MyCircularQueue {
    constructor(x){
        this.ary=[];
        this.size=x;
    }
    enQueue(x){
        
        if (this.size > this.ary.length){
            this.ary.push(x);
            return true;
        }else{
            return false;
        }
    }
    deQueue(){
        if(this.ary.length === 0) return false;
        if(this.size > 0){
            this.ary.shift();
            return true;
        }        
        return false;
    }
    Front(){
        if(this.ary.length === 0) return -1;
        return this.ary[0];
    }
    Rear(){
        if(this.ary.length === 0) return -1;
        if(this.size > this.ary.length) return this.ary[this.ary.length-1];
        return this.ary[this.size-1];
    }
    isEmpty(){
        return (this.ary.length === 0);
    }
    isFull(){
        return (this.ary.length >= this.size);
    }
    
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
//  */
// MyCircularQueue.prototype.enQueue = function(value) {
//         if (this.size > this.ary.length){
//             this.ary.push(value);
//             return true;
//         }else{
//             return false;
//         }
// };

// /**
//  * Delete an element from the circular queue. Return true if the operation is successful.
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.deQueue = function() {
//         this.size--;
//         if(this.size < this.ary.length)this.ary.shift();
// };

// /**
//  * Get the front item from the queue.
//  * @return {number}
//  */
// MyCircularQueue.prototype.Front = function() {
//     return this.ary[0];
// };

// /**
//  * Get the last item from the queue.
//  * @return {number}
//  */
// MyCircularQueue.prototype.Rear = function() {
//     return this.ary[this.size-1];
// };

// /**
//  * Checks whether the circular queue is empty or not.
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isEmpty = function() {
//     return (this.ary.length === 0);
// };

// /**
//  * Checks whether the circular queue is full or not.
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isFull = function() {
//     return (this.ary.length === this.size);
// };

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */