/* can return one instance of a object at a time */

const Singleton = (()=>{
    let instance

    function createInstance() {
        const object = new Object({name:"Muthu"});
        return object;
    }

    return {
        getFunction : function() {
            /* !instance will be true because it is undefined */
            if(!instance) {
               instance = createInstance();
            }

           return instance
        }
    }
})();

const instanceA = Singleton.getFunction();
const instanceB = Singleton.getFunction();
console.log(instanceA);
console.log(instanceA === instanceB);
