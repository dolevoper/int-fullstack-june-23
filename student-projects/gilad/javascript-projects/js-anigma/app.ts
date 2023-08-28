

main();


function main () {

    const anigmaCode = generateAnigmaCode(3);

    console.log(anigmaCode);
}


function generateAnigmaCode(codeCharLength: number) {

    const minCodeRange =  (10 ** (codeCharLength - 1)) - 1;
    const maxCodeRange =  (10 ** (codeCharLength )) - 1;

    const rawRandomCode = Math.floor((Math.random() * (maxCodeRange - minCodeRange)) + minCodeRange);

    console.log("length: " + codeCharLength + " min: " + minCodeRange + " max: " + maxCodeRange + " generated: " + rawRandomCode );

    const formattedCode = (rawRandomCode === minCodeRange) ? "0".repeat(codeCharLength) : rawRandomCode.toString(); 

    const dismantledCode = formattedCode.split("");

    return dismantledCode;
}
