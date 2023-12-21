


function makeRequest(location){
    return new Promise(resolve, reject) =>{
        
        if(location === 'googel'){
        resolve('googel Hi')
    }
    else{
        rejects('no googel'
    }
    }
}

async function dowork() {
const response = await makeRequest("googel")
console.log('respnse resivd')
const prossedResponse = await processRequest(response)
console.log(prossedResponse)
};
dowork();

