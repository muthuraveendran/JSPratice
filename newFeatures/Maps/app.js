/* MAPS = Key-Value pairs - can use any types as key or value */

const map1 = new Map();

/* Map will be stored in the format of Object */
console.log(typeof map1);

// Set Keys
const   key1 ="some string",
        key2 = {},
        key3 = function() {},
        key4 ="some string";

        map1.set(key1,'value1');
        map1.set(key2,'value2');
        map1.set(key3,'value3');
        /* Key must be unique if its duplicate it will replace the old  value into new one
            value can be duplicate
            Ex: key1 is used in first and last
        */
        map1.set(key4,'value4');
        // map1.set(key5,'value1');

        /* Get valuesby key */
        // console.log(map1.get(key1),map1.get(key2),map1.get(key3));

        /* Count value in map */
        // console.log(map1.size);

        /* ITERATING MAP */

        /* Loop using for of get key and value */
        
        // for(let [key,value] of map1) {
        //     console.log(`The key is ${key} and the value is ${value}`);
        // }

        /* Iterates Key only */
        // for(let  key of map1.keys()) {
        //     console.log('The key value is ', key)
        // }

           /* Iterates Key only */
        //    for(let  key of map1.values()) {
        //     console.log('The key value is ', key)
        // }

        /* Loop with ForEach */
        // map1.forEach((key , value) => {
        //     console.log(`The key is ${key} and the value is ${value}`)
        // })

        /* Convert Map into Array*/

        const array1 = Array.from(map1);
        console.log(array1);