function insertItemAtIndex(array,item,index){
    let temp1 = array[index];
    array[index] = item;
    let temp2 = 0;
    let length = array.length
    for(let i=index+1;i<=length;i++){
        temp2 = array[i]
        array[i] = temp1;
        temp1 = temp2;
    }
    return array;
}

console.log(insertItemAtIndex([1,2,4,5,6],3,2))