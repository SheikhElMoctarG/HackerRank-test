var createCounter = function(init) {
    let real = init;
    const increment = ()=> init = init+1;
    const reset = ()=> init = real;
    const decrement = ()=> init = init-1; 
    return {
        increment: increment,
        reset: reset,
        decrement: decrement
    };
};

var counter = createCounter(5);
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
