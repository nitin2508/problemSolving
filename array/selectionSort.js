function selectionSort(array){
    for(var i =0;i<array.length;i++){
        let minElement =array[i];
        let minIndex = i;
        for(var k = i;k<array.length;k++){1
            if(array[k]<minElement){
                minElement = array[k];
                minIndex = k
            }
        }
        array[minIndex] = array[i];
        array[i]= minElement;
    }
    return array.join(' ');

}

console.log(selectionSort([2,7,4,1,5,3]));