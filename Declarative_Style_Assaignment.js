// 1 > Max Number in an Array
undefined
const arr = [2,3,4,5,6,7,90,109,299];
undefined
const max = arr.reduce((max,current)=> current>max ? current:max , arr[0]);
undefined
max;
299


// 2 > Delete those Elements in an array > 20;
undefined
let array = [9,20,11,22,90,30,1,2,3,4,7];
undefined

let dele = array.filter(ne => ne<=20);
undefined
dele;
(8) [9, 20, 11, 1, 2, 3, 4, 7]


// 3 > sum of all elements in array
undefined
var near = [1,2,3,4,5,6,7,8,9,90,110];
undefined
var sum = near.reduce((sum , current) => sum + current , 0);
undefined
sum
245

// 4> SUM OF ALL Even Elements and Odd Elements
var arrays = [2,3,4,5,6,78,8,10,11,20];
undefined
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

// 5> Average of All Elements
var myarr = [90,200,90,80,90,89,100];
undefined
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
