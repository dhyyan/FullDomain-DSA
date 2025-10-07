function quickSort(arr){
    if(arr.length<=1)return arr
let left=[]
let right=[]
let pivot=arr[arr.length-1]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]

}


console.log(quickSort([32,35,1,23,7,86,3,46,5]))