function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let index=i
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[index]){
                index=j
            }
        }
        [arr[i],arr[index]]=[arr[index],arr[i]]
    }
    return arr
}

console.log(selectionSort([32,35,1,23,7,86,3,46,5]))