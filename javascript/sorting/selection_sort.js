function selectionSort(array) {
  for(let i = 0; i < array.length; i++){
    let lowest = i;
    for(let p = i + 1; p < array.length; p++){
      if(array[p] < array[lowest]){
        lowest = p;
      }
    }

    //swap only when nessesary
    if(array[i] !== array[lowest]){ 
      let temp = array[i];
      array[i] = array[lowest];
      array[lowest] = temp;
    }
  
  }
  return array;
}
selectionSort([16, 5, 11, 1, 3, 11, 6, 22, 11, 53, 23, 14]);
