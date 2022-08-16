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


const insertionSort = (arr) => {
   for(let i = 1; i < arr.length; i++){
    for(let j = i; j > 0; j--){
        if(arr[j] < arr[j-1]){
            const temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        } else {
            break;
        }
    }
   }

    return arr; 
}



console.log(insertionSort([2,1,5,3,0,24,36,100,12]));