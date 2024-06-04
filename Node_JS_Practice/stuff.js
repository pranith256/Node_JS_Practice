var counter = function(arr){
    return `There are ${arr.length} elements in array`;
};

var adder = function(a,b){
    return `The sum of a,b is ${a+b}`;
};

var pi = 3.142;

module.exports = {
    counter:counter,
    adder:adder,
    pi: pi
}