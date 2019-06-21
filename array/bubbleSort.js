function bubbleSort(array){
    let n = array.length-1;
    for(var i=0;i<n-1;i++){
        for(var k=0;k<n-i;k++){
            if(array[k]>array[k+1]){
                let temp = array[k+1];
                array[k+1] = array[k];
                array[k] = temp
            }
        }
    }
    return array;
}


console.log(bubbleSort([2,7,4,1,5,3]));