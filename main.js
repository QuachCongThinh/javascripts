Array.prototype.filter2 = function(callback){
  var output = [];
  for(var index in this){
    if(this.hasOwnProperty(index)){
      var results = callback(this[index], index, this)
      if (results){
        output.push(this[index]);
      }
    }
  }
  return output;
}

const juices = [
  {
    id: 1,
    name: 'Oi',
    coin: 100
  },
  {
    id: 2,
    name: 'Man',
    coin: 780
  },
  {
    id: 3,
    name: 'Thanh Long',
    coin: 500
  },
  {
    id: 4,
    name: 'Vai',
    coin: 630
  },
]

var getJuice = juices.filter2(function(juice){
  console.log(juice);
  return juices.coin >= 600;
})
//  






// Datatypes
/**  Primtive types
  * string
  * number
  * boolean
  * null
  * undefined
  * symbol
*/
/**  reference types
  * object: types in object
  * array: Array., for, find, map, reduce, filter, ... function in array
  * date
  * ...
*/

// Functions
/**
 * Declaration Function
 * Expression Function
 * Arrow Function
 * IIFE function
 */

// build-in function in js

/**
 * loop
 * switch-case
 * conditions
 * break/continue
 */


/** Advanced
 * Map
 * Hoisting
 * Scope
 * comparisons
 * asynchronous: async-await, promise, try-catch 
 * callback, fallback
 * stack, event loop, callback queue
 * Event listeners
 * closure
 * api: get, post, patch
 * hosting, domain, http, ssl
 * es version
 * module, common, udm
 * ajax
 * this
 * binding
 * class
 * spread, rest
 */

// => master