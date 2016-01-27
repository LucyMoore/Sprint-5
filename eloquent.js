//1. Minimum

var min = function(a,b){
  return Math.min(a,b)
};
                 

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//2. isEven - recursion

function isEven(num){  
    if (num === 0 ){
      return true;}
    else if (num === 1){
      return false;}
    else{
      return isEven(num - 2)
    }
             
 
}

console.log(isEven(4));
// → true
console.log(isEven(5));
// → false
console.log(isEven(-8));
// → negative numbers "crash" the program


//3. counting beans

function countBs(param){
  var counter =0;
  var array = param.split('');
    array.map(function(value){
    if(value === 'B'){
      counter++;
    }
    });
  return counter;
};

function countChar(arg1, arg2){
  var count = 0;
  var array = arg1.split('');
  array.map(function(value){
   if(value === arg2){
    count++;
   }
    });
  
  return count;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
