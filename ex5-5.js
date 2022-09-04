Array.prototype.myMap = function(callbackFunction) {
    const array = this;
    let newArray = [];
    // your code here

for(var i=0;i<array.length;i++){
    newArray.push(callbackFunction(array[i]));
}
    return newArray;
  }
  
  function multiplicator(element) {
      return 2 * element;
  }
  
  [1,2,3].map(multiplicator); // [2,4,6]
  [1,2,3].myMap(multiplicator); // [2,4,6]

  console.log( [1,2,3].map(multiplicator) );
  console.log( [1,2,3].myMap(multiplicator) );