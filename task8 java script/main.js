// task1
let member = {
    name:"Elzero",
    age:38,
    country:"Egypt",
    fullDetails:function(){
    
    console.log (`My Name Is ${member.name},My Age Is ${member.age},I Live in${member.country}`)
    } 
    }
    
    console.log(member.name)
    console.log(member.age)
    console.log(member.country)
    member.fullDetails()


// task3
let a ={
a:2,
};

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject=Object.assign({},a,threeNums,twoNums)
console.log(finalObject);







    // task2.2
let img=document.getElementById("logoImage");
img.src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png ";
img.alt="Elzero logo"

for(i=0;i<11;i++){
    if(i<11){
    console.log(img)
    }
}




// task 3,3
let myP=document.getElementById("myParagraph");
myP.remove();

let myDiv=document.querySelector(".our-element");
let myElement=document.createElement("div");
myElement.className="start";
myElement.title="start Element";
myElement.setAttribute("data-value","start");
myDiv.before(myElement);
let myValue=document.createElement("div");
myValue.className="end";
myValue.title="End Element";
myValue.setAttribute("data-value","End");
myDiv.after(myValue);
console.log(myElement)
console.log(myDiv)
console.log(myValue)

// task3,5
document.addEventListener('click', function(event) {
    console.log('This element type ' + event.target.tagName.toLowerCase());
});

