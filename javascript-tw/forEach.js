printValues = (number,index) => {
    console.log("Index:"+index+" and value:"+number);
}
function forEachDemo(arr,callback){
    for(var i=0;i<arr.length;i++){
        callback(arr[i],i);
    }

}
arr= ["one","two","three","four","five"];
forEachDemo(arr,printValues);
