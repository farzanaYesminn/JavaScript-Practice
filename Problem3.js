function sortMaker(array) {
    
    if (Array.isArray(array) && array.every(item => typeof item === 'number')) {
      const sortedArray = [...array].sort((a, b) => a - b);
      return sortedArray;
    }
   
    else if (Array.isArray(array) && array.some(item => typeof item !== 'number')) {
      return 'Invalid Input';
    }
    
    else {
      return 'Invalid Input';
    }
  }
  
  // স্যাম্পল ইনপুটের জন্য
  console.log(sortMaker([2, 3])); 
  console.log(sortMaker([4, 2]));
  console.log(sortMaker([4, 4])); 
  console.log(sortMaker([1, 2])); 
  console.log(sortMaker([4, -2])); 
  console.log(sortMaker([0, 1])); 
  console.log(sortMaker(['a', 2])); 
  