/*
Hash tables (sometimes called hash maps) store "key-value pairs". They do so in a memory efficient way by using a "hashing function" that translates keys into numerical "indices" located within a fixed block of memory (think about the contiguous blocks of memory used in arrays). Hash tables only increase their size in memory when necessary, and reduce their size in memory when possible.

A hash table would be great for....

A contact list you might add to or remove from over time.
*/




// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
    var storage = [];
  
    var limitedArray = {};
    limitedArray.get = function(index) {
      checkLimit(index);
      return storage[index];
    };
    limitedArray.set = function(index, value) {
      checkLimit(index);
      storage[index] = value;
    };
    limitedArray.each = function(callback) {
      for (var i = 0; i < storage.length; i++) {
        callback(storage[i], i, storage);
      }
    };
  
    var checkLimit = function(index) {
      if (typeof index !== 'number') {
        throw new Error('setter requires a numeric index for its first argument');
      }
      if (limit <= index) {
        throw new Error('Error trying to access an over-the-limit index');
      }
    };
  
    return limitedArray;
  };
  
  // This is a "hashing function". You don't need to worry about it, just use it
  // to turn any string into an integer that is well-distributed between the
  // numbers 0 and `max`
  var getIndexBelowMaxForKey = function(str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  };
  
  ///////////TYPE BELOW HERE!
  
  var HashTable = function() {
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
  };
  
  HashTable.prototype.insert = function(k, v) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    this._storage.set(index, v);
  };

  HashTable.prototype.retrieve = function(k) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    return this._storage.get(index);
  };
  
  HashTable.prototype.remove = function(k) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    this._storage.set(index, undefined);
  };

  const x = new HashTable();
  console.log(x.insert("bob", "ross"));
  console.log(x.retrieve("bob"));
//   console.log(HashTable.insert("bob", "ross"));

  /*
    console.log(`Value: ${v}`);
    console.log(`Key: ${k}`);
    console.log(`Index: ${index}`);
    try {
      this._storage.set(index, v); // Why doesn't this line work?

    }
    catch (err) {
        console.log('Error: ' + err);
        console.log(`Limit Before: ${this._limit}`);
        this._limit *= this._limit;
        console.log(`Limit After: ${this._limit}`);
        this._storage.set(index, v);   

    //   if (e instanceof AssertionError) {
    //       this._limit *= index;
    //       this._storage.set(index, v);    
    //   };
    }

  */