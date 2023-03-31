function miniMaxSum(arr) {
    // Write your code here
    //first sort the array
    arr.sort((a,b) => a - b)
    // console.log(arr)
    let max = arr[0] + arr[1] + arr[2] + arr[3];
    let min = arr[1] + arr[2] + arr[3] + arr[4];
    //or one could use for loop to iterate over sorted array - add elements to find max and min
    console.log(`${max} ${min}`)
   
    
}
