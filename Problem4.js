function findAddress(obj) {
 
    let result = Object.values(obj).join(',');
  
    if (Object.keys(obj).length === 0) {
      result = '__,__,__';
    } else {
      for (const key in obj) {
        if (obj[key] === undefined) {
          result = result.replace(`${key},`, '__,');
        }
      }
    }
  
    return result;
  }
  
 
  console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" })); 
  console.log(findAddress({ street: 10, society: "Earth Perfect" }));
  console.log(findAddress({ street: 10 })); 
  