filterDemo = (arr , checkIfNumberDivisibleBy2) =>{
    var output = [];
    var count = 0;
    for(var i=0;i<arr.length;i++){
        var value = checkIfNumberDivisibleBy2(arr[i]);
        if(value != null){
            output[count] = value;
            count++;
        }
    }
    return output;
}
checkIfNumberDivisibleBy2 = (number) => {
    if(number % 2==0){
        return number;
    }
    else{
        return null;
    }
}
 arr = [1,2,3,4,5];
 const res = filterDemo(arr,checkIfNumberDivisibleBy2);
 console.log(res);
