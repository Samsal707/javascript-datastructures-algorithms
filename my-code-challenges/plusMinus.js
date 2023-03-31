function plusMinus(arr) {
    // Write your code here
    //declare 3 counts 
    let negativeNums = 0;
    let positveNums = 0;
    let zeros = 0;
    //iterate throught the array
    for(let i = 0; i <= arr.length; i++){
        //count the number of positve numbers
        if( arr[i] > 0){
            positveNums += 1
        }else if ( arr[i] < 0){
            negativeNums += 1
        }else if (arr[i] === 0){
            zeros += 1
        }
    }
    
    let ratios = [ (positveNums/arr.length).toFixed(6), (negativeNums/arr.length).toFixed(6), (zeros/arr.length).toFixed(6) ]
    
      for ( let j= 0; j< ratios.length; j++){
          console.log(ratios[j])
      }

}