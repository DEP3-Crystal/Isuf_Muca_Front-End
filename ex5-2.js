var myInfluencer={
    name:"David Draiman",
    age:49,
    qualities:["strong","talented","sweethearted"]
};

//Displayig name and age
console.log("My influencer's name :"+myInfluencer.name);

console.log("age: "+myInfluencer.age);

//Displaying information about qualities
for(var i=1;i<=myInfluencer.qualities.length;i++){
    console.log("Quality"+i+" : "+myInfluencer.qualities[i-1]);
}