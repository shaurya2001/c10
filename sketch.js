var a = prompt("Enter the first variable: ")
var b = prompt("Enter the second variable: ")

function setup() {
  var b2 = createButton("Click here to Swap")

  //mousePressed
  b2.mousePressed(swap)
}

function swap() {
  [a, b] = [b, a]

  console.log("The value of a after swap: " + a)
  console.log("The value of b after swap: " + b)
}
