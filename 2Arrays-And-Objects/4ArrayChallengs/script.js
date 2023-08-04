const arr = [1,2,3,4,5]

//arr=[6,5,4,3,2,1,0]

arr.unshift(0)
arr.push(6)
arr.reverse()

console.log(arr);

const arr1 = [1,2,3,4,5]

const arr2 = [5,6,7,8,9]

arr1.splice(3,1)
arr3 = arr1.concat(arr2)
console.log(arr3);

//

arr4 = [...arr1 ,...arr2]