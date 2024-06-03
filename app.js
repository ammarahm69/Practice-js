// let newNode = document.createElement('h1')
// let parentDiv = document.getElementById('childElement').parentNode
// let child = document.getElementById('childElement')
// child.textContent = "Hello Parat!"
// newNode.textContent = "Welcome"
// parentDiv.insertBefore(newNode,child)
// console.log(parentDiv);

let parentDiv = document.getElementById('parentElement')
// console.log(parentDiv);
let firstChild = parentDiv.firstChild
// Create a new element
let newElement = document.createElement("h1");
newElement.textContent = "Hello World"
let newElement2 = document.createElement("h4");
newElement2.textContent = "Hello"

// Insert the new element before the first child
parentDiv.insertBefore(newElement2 , firstChild);
console.log(parentDiv);