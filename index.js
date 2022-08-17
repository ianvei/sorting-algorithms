// bubble sort

const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
    // return arr;
}

// const bubbleSort = (arr) => {
//     let noSwaps;
//     for(let i = arr.length; i > 0; i--){
//         noSwaps = true;
//         for(let j = 0; j < i-1; j++){
//             if(arr[j] > arr[j+1]){
//                 noSwaps = false;
//                 swap(arr, j, j+1);
//             }
//         }
//         if(noSwaps){
//             break;
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([2,1,5,3,0,24,36,100,12]));

// const selectionSort = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         let smallestValue = i;
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[j] < arr[smallestValue]){
//                 smallestValue = j;
                
//                 // console.log(arr, arr[i], arr[smallestValue])
//             }
            
//         }
//         swap(arr, i, smallestValue)
//     }
//     return arr;
// }


// const insertionSort = (arr) => {
//    for(let i = 1; i < arr.length; i++){
//     for(let j = i; j > 0; j--){
//         if(arr[j] < arr[j-1]){
//             const temp = arr[j];
//             arr[j] = arr[j-1];
//             arr[j-1] = temp;
//         } else {
//             break;
//         }
//     }
//    }

//     return arr; 
// }

// const merge = (arr1, arr2) => {
//     const mergedArray = []
//     const arr1Copy = [...arr1];
//     const arr2Copy = [...arr2];
//     while(arr1Copy[0] < arr2Copy[0] && arr1Copy.length){
//             mergedArray.push(arr1Copy[0])
//             arr1Copy.shift()
//     }
//     return [...mergedArray, ...arr2Copy, ...arr1Copy];
// }

// const mergeSort = (arr) => {
//     let arrCopy = [...arr];
//     if(arrCopy.length <= 1) {
//         return arr;
//     }
    
//     let half = Math.floor(arrCopy.length - 1 / 2)

//     left = mergeSort(arrCopy.slice(0, half));
//     right = mergeSort(arrCopy.slice(half));
//     return merge(left, right);
// }


// console.log(merge([1,3,6], [4,5]))


const pivotHelper = (arr, start=0, end=arr.length-1) => { // my implementation
    let pivotIndex = 0;
    for (let i = start+1; i < arr.length; i++){
        if(arr[0] > arr[i]){
            pivotIndex += 1
            let temp = arr[i];
            arr[i] = arr[pivotIndex];
            arr[pivotIndex] = temp
        }
    }
    let temp = arr[pivotIndex];
    arr[pivotIndex] = arr[0]
    arr[0] = temp;
    return pivotIndex
}



const pivot = (arr, start=0, end=arr.length - 1) => {
    let pivot = arr[start];
    let swapIndex = start;
    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIndex += 1;
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}   

const quickSort = (arr, left=0, right=arr.length-1) => {
    if(left >= right){
        return arr;
    }
    let pivotPoint = pivot(arr, left, right);
    quickSort(arr, left, pivotPoint-1)
    quickSort(arr, pivotPoint+1, right)
    return arr
}

console.log(pivot([4,8,2,1,5,7,6,3]));

console.log(quickSort([4,8,2,1,5,7,6,3,0,100,50,32]))
// console.log(mergeSort([1,99,10,50,2,5,8,7,100,0,150,200,4]));