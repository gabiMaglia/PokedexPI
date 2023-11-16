export const addZero = (num) => {
    let numStr = num.toString();
     let zerosToAdd = 3 - numStr.length;
    for (let i = 0; i < zerosToAdd; i++) {
       numStr = "0" + numStr;
     }    
    return numStr
   
   };
