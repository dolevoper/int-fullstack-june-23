//*******************************************1. Implement a 2 player version of this game (validate inputs etc)*********************************
//
//alert("Nim is a 2 player game.  There are 13 matches on the table at the beginning of the game. Each player in his turn **must** take 1, 2 or 3 matches from the pile.  The player to take the last match, loses.")
//let pile = 13 ;
//
//function game(pile) {
//    while (pile !== 1){
//        let playerOne = prompt("player one, take match : ") ;
//        while(playerOne?.length !== 1 || (playerOne?.charCodeAt(0) !== 49 && playerOne?.charCodeAt(0) !== 50 && playerOne?.charCodeAt(0) !== 51 )){
//            playerOne = prompt("wrong result, player one take again match") ;
//            while(playerOne === null){
//                return "bye bye" ;
//            }
//        }
//        pile = pile - Number(playerOne) ;
//        alert("The number in the pile :" + pile) ;
//        if(pile === 1) {
//            return "player one won" ;
//        }else {
//            let playertwo = prompt("player two, take match : ") ;
//            while(playertwo?.length !== 1 || (playertwo?.charCodeAt(0) !== 49 && playertwo?.charCodeAt(0) !== 50 && playertwo?.charCodeAt(0) !== 51 )){
//                playertwo = prompt("wrong result, player two take again match") ;
//                while(playertwo === null){
//                    return "bye bye" ;
//                }
//            }
//            pile = pile - Number(playertwo) ;
//            alert("The number in the pile :" + pile) ;
//        }
//    }
//    return "player two won" ;
//}
//alert(game(pile)) ;



// **************************************************************End part 1***********************************************************************



//let random = getRandomArbitrary(1, 4)
//function getRandomArbitrary(min : number,max : number) {
//    return Math.floor(Math.random()*(max-min) +min); 
//}
//alert(random)




//*****************************************************Start part 2 level : Easy*******************************************************************

//alert("There are 13 matches on the table at the beginning of the game. Each player in his turn **must** take 1, 2 or 3 matches from the pile.\n  The player to take the last match, loses\n Easy - (The computer goes first and just takes a random number of matches on each turn)")
//let pile = 13 ;
//
//function game(pile) {
//    while (pile !== 1){
//        let playerOne = getRandomArbitrary(1, 4) ;
//
//        function getRandomArbitrary(min : number,max : number) { 
//        return Math.floor(Math.random()*(max-min) +min); 
//        }
//        alert("The computer take a " + playerOne + " matches from the pile" ) ;
//        
//        pile = pile - Number(playerOne) ;
//        alert("The number in the pile :" + pile) ;
//        
//        if(pile < 1) {
//            return "player one won" ;
//        }else {
//            let playertwo = prompt("player two, take match : ") ;
//            while(playertwo?.length !== 1 || (playertwo?.charCodeAt(0) !== 49 && playertwo?.charCodeAt(0) !== 50 && playertwo?.charCodeAt(0) !== 51 )){
//                playertwo = prompt("wrong result, player two take again matches") ;
//                while(playertwo === null){
//                    return "bye bye" ;
//                }   
//            }
//            pile = pile - Number(playertwo) ;
//            alert("The number in the pile :" + pile) ;
//        }
//    }
//    return "player two won" ;
//}
//alert(game(pile)) ;


//************************************************************End part 2 level: Easy***************************************************************





//*******************************************************Stard part 2 level : Medium***************************************************************

//alert("There are 13 matches on the table at the beginning of the game. Each player in his turn **must** take 1, 2 or 3 matches from the pile.\n The player to take the last match, loses\n Medium - the computer goes first, on the first turn it will take a random number of matches. Starting from his next turn, the computer will try to win if giver the chance.")
//
//let pile = 13 ;
//
//function game(pile) {
//    while (pile !== 1){
//        let playerOne = getRandomArbitrary(1, 4) ;
//
//        function getRandomArbitrary(min : number,max : number) { 
//            if(pile === 4){
//                return 3 ;
//            }else if (pile === 3){
//                return 2 ;
//            }else if (pile === 2){
//                return 1 ;
//            }else {
//                return Math.floor(Math.random()*(max-min) +min);
//            } 
//        }
//        alert("The computer take a " + playerOne + " matches from the pile" ) ;
//        
//        pile = pile - Number(playerOne) ;
//        alert("The number in the pile :" + pile) ;
//        
//        if(pile <= 1) {
//            return "player one won" ;
//        }else {
//            let playertwo = prompt("player two, take match : ") ;
//            while(playertwo?.length !== 1 || (playertwo?.charCodeAt(0) !== 49 && playertwo?.charCodeAt(0) !== 50 && playertwo?.charCodeAt(0) !== 51 )){
//                playertwo = prompt("wrong result, player two take again match") ;
//                while (playertwo === null){
//                    return "bye bye" ;
//                }
//            }
//            pile = pile - Number(playertwo) ;
//            alert("The number in the pile :" + pile) ;
//        }
//    }
//    return "player two won" ;
//}
//alert(game(pile)) ;

//*****************************************************End part 2 level: Medium*****************************************************************


//***************************************************Start part 2 level : Impossible************************************************************
//

//alert("There are 13 matches on the table at the beginning of the game. Each player in his turn **must** take 1, 2 or 3 matches from the pile.\n The player to take the last match, loses\n Impossible - the computer goes second and wins every time.")
//let pile = 13 ;
//
//function game(pile) {
//    while (pile !== 1){
//        let playerOne = prompt("player one, take match : ") ;
//            while(playerOne?.length !== 1 || (playerOne?.charCodeAt(0) !== 49 && playerOne?.charCodeAt(0) !== 50 && playerOne?.charCodeAt(0) !== 51 )){
//                playerOne = prompt("wrong result, player two take again match") ;
//                while (playerOne === null){
//                    return "bye bye" ;
//                }
//            }
//        pile = pile - Number(playerOne) ;
//        alert("The number in the pile :" + pile) ;
//        
//        if(pile <= 1) {
//            return "player one won" ;
//        }else {
//            let playertwo = getRandomArbitrary(pile) ;
//
//            function getRandomArbitrary(pile) { 
//                if(pile === 12 || pile === 8 || pile === 4  ){
//                    return 3 ;
//                }else if (pile === 11 || pile === 7 || pile === 3 ){
//                    return 2 ; 
//                } else if (pile === 10 || pile === 6 || pile === 2 ) {
//                    return 1 ; 
//                }                            
//            } 
//            alert("The computer take a " + playertwo + " matches from the pile" ) ; 
//            pile = pile - Number(playertwo) ;
//            alert("The number in the pile :" + pile) ;
//        } 
//    }
//        
//
//    
//    return "The computer won" ;
//}
//alert(game(pile)) ;
//

//***************************************************End part 2 level : Impossible************************************************************


//***************************************************ALL THE GAMES WITH A MENU****************************************************
const choosingGame = Number(prompt(`you can choose between the games, write the number of the game you want : \n
 1.Two players write (1) 
 2. play with the computer level - Easy write (2)  
 3.play with the computer level- medium write (3)  
 4. play with the computer level - Impossible write (4)`))

if (choosingGame === 1 ) {

    alert("Nim is a 2 player game.  There are 13 matches on the table at the beginning of the game. Each player in his turn **must** take 1, 2 or 3 matches from the pile.  The player to take the last match, loses.")
    let pile = 13 ;

    function game(pile) {
        while (pile !== 1){
            let playerOne = prompt("player one, take match : ") ;
            while(playerOne?.length !== 1 || (playerOne?.charCodeAt(0) !== 49 && playerOne?.charCodeAt(0) !== 50 && playerOne?.charCodeAt(0) !== 51 )){
                playerOne = prompt("wrong result, player one take again match") ;
                while(playerOne === null){
                   return "bye bye" ;
                }
            }
            pile = pile - Number(playerOne) ;
            alert("The number in the pile :" + pile) ;
            if(pile === 1) {
                return "player one won" ;
            }else {
               let playertwo = prompt("player two, take match : ") ;
                while(playertwo?.length !== 1 || (playertwo?.charCodeAt(0) !== 49 && playertwo?.charCodeAt(0) !== 50 && playertwo?.charCodeAt(0) !== 51 )){
                    playertwo = prompt("wrong result, player two take again match") ;
                    while(playertwo === null){
                        return "bye bye" ;
                    }
                }
                pile = pile - Number(playertwo) ;
                alert("The number in the pile :" + pile) ;
            }
        }
        return "player two won" ;
    }
    alert(game(pile)) ;
}else if (choosingGame === 2) {

    alert("There are 13 matches on the table at the beginning of the game. Each player in his turn **must** take 1, 2 or 3 matches from the pile.\n  The player to take the last match, loses\n Easy - (The computer goes first and just takes a random number of matches on each turn)")
    let pile = 13 ;
    
    function game(pile) {
        while (pile !== 1){
            let playerOne = getRandomArbitrary(1, 4) ;
    
            function getRandomArbitrary(min : number,max : number) { 
            return Math.floor(Math.random()*(max-min) +min); 
            }
            alert("The computer take a " + playerOne + " matches from the pile" ) ;
            
            pile = pile - Number(playerOne) ;
            alert("The number in the pile :" + pile) ;
            
            if(pile < 1) {
                return "player one won" ;
            }else {
                let playertwo = prompt("player two, take match : ") ;
                while(playertwo?.length !== 1 || (playertwo?.charCodeAt(0) !== 49 && playertwo?.charCodeAt(0) !== 50 && playertwo?.charCodeAt(0) !== 51 )){
                    playertwo = prompt("wrong result, player two take again matches") ;
                    while(playertwo === null){
                        return "bye bye" ;
                    }   
                }
                pile = pile - Number(playertwo) ;
                alert("The number in the pile :" + pile) ;
            }
        }
        return "player two won" ;
    }
    alert(game(pile))     

}else if (choosingGame === 3) {

    alert("There are 13 matches on the table at the beginning of the game. Each player in his turn **must** take 1, 2 or 3 matches from the pile.\n The player to take the last match, loses\n Medium - the computer goes first, on the first turn it will take a random number of matches. Starting from his next turn, the computer will try to win if giver the chance.")
    let pile = 13 ;
    
    function game(pile) {
        while (pile !== 1){
            let playerOne = getRandomArbitrary(1, 4) ;
    
            function getRandomArbitrary(min : number,max : number) { 
                if(pile === 4){
                    return 3 ;
                }else if (pile === 3){
                    return 2 ;
                }else if (pile === 2){
                    return 1 ;
                }else {
                    return Math.floor(Math.random()*(max-min) +min);
                } 
            }
            alert("The computer take a " + playerOne + " matches from the pile" ) ;
            
            pile = pile - Number(playerOne) ;
            alert("The number in the pile :" + pile) ;
            
            if(pile <= 1) {
                return "player one won" ;
            }else {
                let playertwo = prompt("player two, take match : ") ;
                while(playertwo?.length !== 1 || (playertwo?.charCodeAt(0) !== 49 && playertwo?.charCodeAt(0) !== 50 && playertwo?.charCodeAt(0) !== 51 )){
                    playertwo = prompt("wrong result, player two take again match") ;
                    while (playertwo === null){
                        return "bye bye" ;
                    }
                }
                pile = pile - Number(playertwo) ;
                alert("The number in the pile :" + pile) ;
            }
        }
        return "player two won" ;
    }
    alert(game(pile)) ;

}else if (choosingGame === 4) {

    alert("There are 13 matches on the table at the beginning of the game. Each player in his turn **must** take 1, 2 or 3 matches from the pile.\n The player to take the last match, loses\n Impossible - the computer goes second and wins every time.")
    let pile = 13 ;
    
    function game(pile) {
        while (pile !== 1){
            let playerOne = prompt("player one, take match : ") ;
                while(playerOne?.length !== 1 || (playerOne?.charCodeAt(0) !== 49 && playerOne?.charCodeAt(0) !== 50 && playerOne?.charCodeAt(0) !== 51 )){
                    playerOne = prompt("wrong result, player two take again match") ;
                    while (playerOne === null){
                        return "bye bye" ;
                    }
                }
            pile = pile - Number(playerOne) ;
            alert("The number in the pile :" + pile) ;
            
            if(pile <= 1) {
                return "player one won" ;
            }else {
                let playertwo = getRandomArbitrary(pile) ;
    
                function getRandomArbitrary(pile) { 
                    if(pile === 12 || pile === 8 || pile === 4  ){
                        return 3 ;
                    }else if (pile === 11 || pile === 7 || pile === 3 ){
                        return 2 ; 
                    } else if (pile === 10 || pile === 6 || pile === 2 ) {
                        return 1 ; 
                    }                            
                } 
                alert("The computer take a " + playertwo + " matches from the pile" ) ; 
                pile = pile - Number(playertwo) ;
                alert("The number in the pile :" + pile) ;
            } 
        }
            
    
        
        return "The computer won" ;
    }
    alert(game(pile)) ;

} else {
    alert("bye bye")
}

//***************************************************ALL THE GAMES WITH A MENU****************************************************