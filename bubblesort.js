function bubbleSort(array) {
  while(!helperFunc(array)){
    array = swap(array)
  }
  return array;
}

function helperFunc(array) {
  return array.reduce(function(bool, item, index, arr){
    if(arr[index + 1] < item) {
      bool = false;
    }
    return bool;
  }, true);
}

function swap(array) {
  var count = 0;
  for(var i = 0; i < array.length; i++) {
    if(array[i] > array[i + 1]) {
      count++;
      var temp = parseInt(array.splice(i, 1).join());
      array.splice(i + 1, 0, temp);
    }
  }
  console.log(count);
  return array;
}

