class MyHashSet {
    constructor(){
        this.ary=[];
    }
    add(key){
        if(this.ary.indexOf(key) === -1) this.ary.push(key);
    }
    remove(key){
        if(this.ary.indexOf(key) > -1) this.ary.splice(this.ary.indexOf(key),1);
    }
    contains(key){
        return this.ary.indexOf(key) > -1
    }
}

/**
 * Initialize your data structure here.
 */
// var MyHashSet = function() {
//     this.ary = []
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.add = function(key) {

//     if(this.ary.indexOf(key) === -1) this.ary.push(key);
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.remove = function(key) {
//     if(this.ary.indexOf(key) > -1) this.ary.splice(this.ary.indexOf(key),1);
// };

// /**
//  * Returns true if this set contains the specified element 
//  * @param {number} key
//  * @return {boolean}
//  */
// MyHashSet.prototype.contains = function(key) {
//     return this.ary.indexOf(key) > -1
// };

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */