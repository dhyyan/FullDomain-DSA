function insertion (arr){
    for(i=1;i<arr.length;i++){
        let pos=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>pos){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=pos
    }
    return arr
}

console.log(insertion([32,35,1,23,7,86,3,46,5]))