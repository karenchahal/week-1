//select the outer box,
// create a new element, div = inner box,
//setattribute, add an id of inner to the new element
//innerText set of the new element
//add this to the outer box, appending the child

// function createOrangeDiv() {
//   var outerBox = document.getElementById("outer");
//   var newBox = document.createElement("div");
//   newBox.setAttribute("id", "inner");
//   newBox.innerText = "Hello everybody!";
//   outerBox.appendChild(newBox);
// }

function buttonClick() {
  console.log("you clicked the button");
  // document.createElement("div"); //this doesn't need to be written out//
  var input = document.getElementById("myFirstInput"); //links the input field to the button clicking//
  var value = input.value;
  console.log("My input Field", input);
  console.log("My value", value);
  var output = document.getElementById("output");
  output.innerHTML = `Hello, ${value}!`;
}

var button = document.getElementById("btn"); //looks to call the id from the button tag//
button.addEventListener("click", buttonClick); //says listen for the click then run the function. Don't need fn in html now//

var inner = document
  .getElementById("inner")
  .addEventListener("click", function() {
    console.log("Inner Clicked");
  });
//can add the "addEventListener" straight to the element just called
