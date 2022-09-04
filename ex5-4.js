const blackFridayCart = {
    phone: "350",
    console: "250",
    tv: "450",
    headPhones: "10.60",
    watch: "20.34",
    bag: "22.36"
  };

  function getCartValue(cart){

    var total=0;

    const keys = Object.keys(cart);

   for(var i=0;i<keys.length;i++){
total+=parseFloat( cart[keys[i]] );
   }

    return total;
  }

  //Displaying sum of cart
  console.log("Value is: "+ getCartValue(blackFridayCart) );