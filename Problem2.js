function matchFinder(string1, string2) {

    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
      return 'Input need to be two string';
    }
  
  
    if (string1.includes(string2)) {
      return true;
    } else {
      return false; 
    }
  }
  
  console.log(matchFinder("John Doe", "ohn")); 
  console.log(matchFinder("JavaScript", "Code")); 
  console.log(matchFinder("Peter Parker", "Pen")); 
  console.log(matchFinder("Peter Parker", "pet")); 
  console.log(matchFinder(123, "abc")); 
  