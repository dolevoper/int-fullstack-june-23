const box = document.getElementById("checkboxOne");
let n = 0;
// console.log(box.checked, 'box.checked');
// console.log('n:', n);


box.addEventListener("change", function(e){
    // console.log(box.checked, 'box checked before');
    // console.log('box.indeterminate = true', box.indeterminate == true);
    // console.log(this);

    if(n >= 1){
        box.checked = true;
        console.log('3');
        n = 0;
        // console.log('box.indeterminate = true', box.indeterminate == true);
        // console.log(box.checked, 'box checked after');
        return;
    } 
    
        
    if (this.checked && n <= 1){
        box.indeterminate = true;
        n += 1;
        // console.log('1');
        // console.log('n', n);
        // console.log('box.indeterminate = true', box.indeterminate == true);
        // console.log(box.checked, 'box checked after');
        return;

    }
    // if(box.indeterminate == true){
    //     box.checked = true;
    //     n += 1;
    //     console.log("2");
    //     console.log('box.indeterminate = true', box.indeterminate == true);
    //     console.log(box.checked, 'box checked after');
    //     return;
    // }
    

    // console.log(n, "n");
    // console.log(box.checked, 'box checked after');



   
})
