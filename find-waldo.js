// The second argument/parameter is expected to be a function
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(waldoIndex) {
  console.log(`Found Waldo at index ${waldoIndex}`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);