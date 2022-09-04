Array.prototype.myReduce = function(callbackFunction, initialVal) {
    
    const array = this;
    let accumulator = (initialVal === undefined) ? 0 : initialVal;
  
    // let newArray = []; 
    // your code here

    for(var i=0;i<array.length;i++){
        accumulator=callbackFunction(accumulator,array[i]);
    }

    return accumulator
  }
  
  
const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  [1,2,3,4].reduce(reducer); // 10
  [1,2,3,4].myReduce(reducer); // 10

  console.log([1,2,3,4].reduce(reducer));
  console.log([1,2,3,4].myReduce(reducer));