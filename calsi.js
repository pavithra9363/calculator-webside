const calsi=(item)=>{
    calculate.value+=item;
    console.log(item);
   
}
 const clearScreen=()=>{
    calculate.value=" ";
}

let deleteKey=()=>{
                                        //   first delete last num so click del botrton the last num is delete and next same process
    calculate.value=calculate.value.slice(0,-1);
}



 const equalto=(a)=>{
    try{                                   //    value va result la store panni vachippo atha  again pass panno aptina result varum
   let  equal= eval(calculate.value);
  console.log (calculate.value=equal);
   console.log(equal);
    }
    catch(error){
        alert("Invalid expression!");
        clearScreen();
    }
} 


























































