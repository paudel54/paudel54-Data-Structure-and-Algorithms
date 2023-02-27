console.log('Hello Hash Tables');

// Creating a hash table constructor:

class HashTable {
    // constructor with an arg is a default size value for constructor
    constructor(size = 7) {
        // creates a array with index 0-6  : => 7 items in it!
        this.dataMap = new Array(size);
    }

    // the underscore helps other dev understand: this is the method that should only be called by other methods. 
    // We are not supposed  to call it directly. 
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }
}
// hash table creation 
let myHashTable = new HashTable();
console.log(myHashTable)
