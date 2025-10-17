//binary search normal
// function binarySearch(arr,target){
//     let left=0
//     let right=arr.length-1
//     while(left<=right){
//     let mid=Math.floor((left+right)/2)
//         if(target==arr[mid])return mid
//         if(target<arr[mid]){
//             right=mid-1
//         }else{
//             left=mid+1
//         }
//     }
//     return -1
// }

// const numbers = [10, 20, 30, 40, 50];
// const target = 30;
// console.log(binarySearch(numbers, target))



///binary search with recursion 
// function binarySearch(arr,target,left=0,right=arr.length-1){
//     if(left>=right)return -1
//     let mid=Math.floor((left+right)/2)
//     if(arr[mid]==target)return mid
//     if(target<arr[mid]){
//         return binarySeach(arr,target,left,mid-1)
//     }else{
//          return binarySeach(arr,target,mid+1,right)
//     }
// }

//  const numbers = [10, 20, 30, 40, 50];
// const target = 30;
// console.log(binarySearch(numbers, target))