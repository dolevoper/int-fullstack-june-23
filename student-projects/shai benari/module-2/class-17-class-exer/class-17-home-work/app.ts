// make array of numbers
// write function to find the median:
// find the length of the array
// find if the length number is odd 
// if it is odd the median is (length -1)/2 + 1
// eles the median is averge of  lengh/2 -1 and  lengh/2 +1
// returen and print the median 

const medianArray = [1,2,3,4,5,6,8,8,9,10];
alert(medianArray);
const madianLength = medianArray.length;
const resultMedian = madian(madianLength);
alert(resultMedian);


function madian(item: number){
   alert(madianLength);
   if (item % 2 !==0){
   const resultMedian = medianArray[(madianLength-1)/2 ];
   return(resultMedian)
   }
   else {
    const lowLimet = medianArray[(madianLength)/2 -1];
    const upLimet = medianArray[(madianLength)/2 ];
    alert(upLimet);
    alert(lowLimet);
    const resultMedian = (upLimet+lowLimet)/2;
    return(resultMedian);
   }

}
