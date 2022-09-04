Array.prototype.myFilter = function(callbackFunction) {
    const array = this;
    let newArray = [];
    // your code here
    for(var i=0;i<array.length;i++){
        if(callbackFunction(array[i])){
            newArray.push(array[i]);
        }
    }

    return newArray
  }
  
  function biggerThanFive(element) {
      return element > 4;
  }
  
  [1,2,3,4,5,6,7,8,9].filter(biggerThanFive); // [5,6,7,8,9]
  [1,2,3,4,5,6,7,8,9].myFilter(biggerThanFive); // [5,6,7,8,9]

  console.log([1,2,3,4,5,6,7,8,9].filter(biggerThanFive));
  console.log([1,2,3,4,5,6,7,8,9].myFilter(biggerThanFive));