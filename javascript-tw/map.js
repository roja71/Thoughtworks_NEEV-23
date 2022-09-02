doubleValue = (num) => {
    return num*2;
}

function mapDemo(arr, func){
    var output=[];
    for(var i=0;i<arr.length;i++){
        output[i]=func(arr[i]);
    }
    return output;
}


arr=[1,2,3,4,5]
console.log(mapDemo(arr,doubleValue));
