function secoundLargest(array){
    let largest = array[0];
    let secoundLargest= 0;
    for(var i=1;i<array.length;i++){
        if(array[i]>largest){
            secoundLargest = largest;
            largest = array[i];
        }else if(array[i]>secoundLargest && array[i]<largest){
            secoundLargest = array[i];
        }
    }
    return secoundLargest;
}

console.log(secoundLargest([6,7,4,1,5,3]));