function receivesAFunction(callback) {
    console.log(callback())
}

receivesAFunction(function() { return 'Hello there,' })

function returnsANamedFunction() {
    return someFunction;
}

const someFunction = function() {
    return 'Hi i\'m a function'
}

function returnsAnAnonymousFunction() {
    return function() {
        return 1 + 1;
    };
}
// const fn = function() {
//     return 1 + 1;
// }