// bubble sort

const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
    // return arr;
}

const bubbleSort = (arr) => {
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                noSwaps = false;
                swap(arr, j, j+1);
            }
        }
        if(noSwaps){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([2,1,5,3,0,24,36,100,12]));