alert('pleas enter the size of the folowing langth.')
const a = Number(prompt('what is a langth?'))
const b = Number(prompt('what is b langth?'))
const c = Number(prompt('what is c langth?'))

if (a === null || a <= 0 || b === null || b <= 0 || c === null || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('one of the valuse is not ok');
}
else{
    if (c < b || c < a) {
        alert('c must be the longest langth')
    }
    else{
        if (a**2+b**2 === c**2) {
            alert('mabroock alick ya habibi this is a rigth tringle!👌')
        }else{
            alert('wallak you are magnun this is not al rigth trigle!😒')
        }
    }
}