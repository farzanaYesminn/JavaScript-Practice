function cubeNumber(number) {
    if (typeof number === 'number') {
      return number ** 3;
    } else {
      return 'This is not a number';
    }
  }
  
  console.log(cubeNumber(3)); 
  console.log(cubeNumber(4)); 
  console.log(cubeNumber('String')); 
  