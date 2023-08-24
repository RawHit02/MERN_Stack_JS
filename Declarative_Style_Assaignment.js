//Max Number in an Array
undefined
const arr = [2,3,4,5,6,7,90,109,299];
undefined
const max = arr.reduce((max,current)=> current>max ? current:max , arr[0]);
undefined
max;
299
//Delete those Elements in an array > 20;
undefined
let array = [9,20,11,22,90,30,1,2,3,4,7];
undefined
let dele = array.filter(new => new<=20);
VM815:1 Uncaught SyntaxError: Unexpected token '=>'
let dele = array.filter(new) => new<=20;
VM826:1 Uncaught SyntaxError: Unexpected token ')'
let dele = array.filter((new) => new<=20);
VM839:1 Uncaught SyntaxError: Unexpected token ')'
let dele = array.filter(ne => ne<=20);
undefined
dele;
(8) [9, 20, 11, 1, 2, 3, 4, 7]
//sum of all elements in array
undefined
arr = [1,2,3,4,5,6,7,8,9,90,110];
VM1027:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:5
(anonymous) @ VM1027:1
var arr = [1,2,3,4,5,6,7,8,9,90,110];
VM1034:1 Uncaught SyntaxError: Identifier 'arr' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM1034:1
var near = [1,2,3,4,5,6,7,8,9,90,110];
undefined
var sum = near.reduce((sum , current) => sum + current , 0);
undefined
sum
245
var arrays = [2,3,4,5,6,78,8,10,11,20];
undefined
var sumoddeven = arrays.reduce((sum,even)=> sum + even%2===0 , 0);
undefined
var sumoddevenn = arrays.reduce((sum,odd)=> sum + odd%2===1 , 0);
undefined
sumoddeven;
true
sumoddevenn;
true
var sumoddeven = arrays.reduce((sum,even)=> sum + even , near[0]%2===0);
undefined
sumoddeven;
147
var sumeven = arrays.reduce(sum,even) =>{
VM2265:1 Uncaught SyntaxError: Malformed arrow function parameter list
var sumeven = arrays.reduce((sum,even) =>{
    if(even%2===0){
        return sum+even;
    }
    return sum;
},0);
undefined
var sumodd = arrays.reduce((sum,odd) =>{
    if(odd%2===1){
        return sum+odd;
    }
    return sum;
},0);
undefined
sumeven;
128
sumodd;
19
var myarr = [90,200,90,80,90,89,100];
undefined
var average = myarr.reduce((sum,curr)=> sum+curr % myarr.length ,0);
undefined
average;\
VM2914:1 Uncaught SyntaxError: Invalid or unexpected token
average;
32
myarr.length;
7
var average = myarr.reduce((sum,curr)=>sum+curr % (myarr.length),0);
undefined
average;
32
var average = myarr.reduce((sum,curr)=>sum+curr ,0);
undefined
average;
739
average % myarr.length;
4
var average = myarr.reduce((sum,curr)=>sum+curr ,0);
var avg = average/myarr.length;
undefined
avg;
105.57142857142857
var average = myarr.reduce((sum,curr)=> sum+curr ,0);
var avg = average%myarr.length;
undefined
var average = myarr.reduce((sum,curr)=>sum+curr / (myarr.length),0);
undefined
average;
105.57142857142858
