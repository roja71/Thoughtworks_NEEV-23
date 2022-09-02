addNumbers = (sum ,number) =>{
    return sum+number;
}
reduceDemo = (arr , callback) =>{
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum = callback(sum,arr[i]);
    }
    return sum;
}
arr = [1,2,3,4,5]
const res = reduceDemo(arr,addNumbers);
console.log(res);
