
//********************************************************array******************************************************************

//***************************************************start median 1***************************************************************

//let data = []
//function median(data){
//    if(data.length % 2 !== 0){
//        return data[(data.length - 1)/2]
//    }else {
//        return (data[(data.length/2)-1]+ data[data.length/2])/2
//    }
//}
//
//alert( "The median of this array is :" + (median(data)))


//***************************************************End median 1***************************************************************

//***************************************************Start median 2***************************************************************       

//
//let data = [] ;
//let yourArray = Number(prompt("How many number you want in your array?")) ;
//for(let i=0 ; i<yourArray ; i++){
//    let yourNumbers = Number(prompt("Enter your numbers :")) ;
//    data.push(yourNumbers) ;
//
//}
//alert(data) ;  
//
//function median(data){
//    if(data.length % 2 !== 0){
//        return data[(data.length - 1)/2]
//    }else {
//        return (data[(data.length/2)-1]+ data[data.length/2])/2
//    }
//}
//
//alert( "The median of this array is :" + (median(data)))
     
 //***************************************************End median 2***************************************************************   

//***************************************************## Basic to do list***************************************************************
//

//let data = []
//let yourList = prompt("Add todos : \n if you want to finish write 'stop' ")
//while(yourList !== "stop"){
//        data.push(yourList)
//        yourList = prompt("Add todos : \n if you want to finish write 'stop' ")   
//}
//let printList = ""
//let a=""
//for (let i=0 ; i<data.length ; i++){
//    a=String(i+1)
//
//    printList += a + ". " + data[i] + "\n"
//
//}
//alert(printList)

//******************************************* start 3. Remove todo from the list*********************************************
//let Data = []
//let yourTodos = prompt("Add todos : \n if you want to finish write 'stop' ")
//while (yourTodos !== "stop"){ 
//    Data.push(yourTodos)
//    yourTodos = prompt("Add todos : \n if you want to finish write 'stop'")
//}
//
//
//let printList = ""
//let A=""
//for (let i=0 ; i<Data.length ; i++){
//     A=String(i+1)
//
//    printList += A + ". " + Data[i] + "\n"
//    
//
//}
//alert(printList)
//
//
//let afterDelete = []
//let myArray = Data   //[1, 2, 3, 4, 5]; 
//let yourDelete = Number(prompt("Write the number of the task you want to delete"))
//let startIndex = Number(yourDelete-1); 
//myArray.splice(startIndex, 1);
//
//
//let printListNew = ""
//let B=""
//for (let i=0 ; i<myArray.length ; i++){
//     B=String(i+1)
//
//    printListNew += B + ". " + myArray[i] + "\n"
//    
//
//}
//afterDelete.push(printListNew)
//alert(afterDelete)
//
//******************************************* End 3. Remove todo from the list**********************************************















//let myArra = numberToDelete(x);
//let nhjhgy = Number(prompt("give a number that you want to delete"))
//let myArray = [1, 2, 3, 4, 5];
//
//function numberToDelete(x){
//   let myArray = [1, 2, 3, 4, 5];
//    //let n = Number(prompt("give a number that you want to delete"))
//    let startIndex = Number(nhjhgy-1);
//    myArray = myArray.splice(startIndex, 1);
//    return myArray 
//    
//}
//alert(numberToDelete(myArray));