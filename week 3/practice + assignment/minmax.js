var arr = [44, 23, 45, 66, 98, 13];
var min = arr[0];
var max = arr[0];

for (var i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Minimum: " + min); 
console.log("Maximum: " + max);