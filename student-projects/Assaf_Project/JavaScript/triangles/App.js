// sqrt(const)  = square root of const
// **2   =  power of 2  -   **2 = 5*5


alert("שלום");
const triangle = prompt("האם ברצוננו למצוא את אורך הבסיס או השוק של המשולש?");
if (triangle == "בסיס" || triangle == "הבסיס") {
    const a = prompt("מהו אורכו של שוק א?")
    const b = prompt("מהו אורכו של שוק ב?")
    const c = Math.sqrt(a ** 2 + b ** 2)
    console.log(c)
    alert("אורך הבסיס = " + c)
}
else if (triangle == "שוק" || triangle == "השוק") {
    const c = prompt("מהו אורכו של הבסיס?");
    const a = prompt("מהו אורכו של השוק?");
    const b = Math.sqrt(c ** 2 - a ** 2);
    console.log(b)
    alert("אורך השוק = " + b)
}

else {
    alert("...מצטער, הערך שהכנסתם שגוי או לא מובן. אנא נסו שוב")
}
