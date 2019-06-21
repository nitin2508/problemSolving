function reverseArray(array){
    var length = array.length;
    var loop = Math.floor(array.length/2);
    let temp;
    for(var i=0;i<loop;i++){
        let temp =  array[length-i-1];
        array[length-i-1] = array[i];
        array[i] = temp;
    }
    return array
}

console.log(reverseArray([6,7,4,1,5]));