function xSlice(input: number[], start: number, end: number) {

    const result: number[] = []; 
    
    if (null === end) {

        end = input.length -1;
    } else if (0 > end) {
   
        end = input.length + end -1;
    }

    if (null === start) {

        return null;
    } else if (0 > start) {

        start = input.length + start -1;
    }

    if (start === end) {
        return null;
    }

    /* more validation need here */

    for (let i=start; i<=end; ++i)
    {
        result.push(input[i]) ; 
    }

        return result;
}


function xShift(input: number[])  { 

    const result: number[] = [];

    if (0 === input.length) {
        return null;
    }

    for (let i=1; i<result.length; ++i) {

    result[i] = input[i-1];
    }

    return result;
}

function xConcat(input1: number[], input2: number[])  { 

    const result: number[] = [];

    if (0 === input1.length) {
        return null;
    }

    if (0 === input2.length)
    {
        return input1;
    }

    for (let i=0; i<input2.length; ++i) {

        result[i] = input2[i];
    }

    for (let i=input2.length; i< (input2.length + input1.length); ++i) {

        result[i] = input1[i];
    }

    return result;
}


function xIncudes(input: number[], value: number) {

    for (let i=0; i<input.length; ++i) {
    
        if (input[i] === value) {
            return true;
        }
    }

    return false;

}

function xIndexOf(input: number[], value: number) {

    for (let i=0; i<input.length; ++i) {
        
        if (input[i] === value) {

            return i;
        }
    }
    
    return -1;
}



