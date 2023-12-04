
//const boss = document.querySelector("counter1") as HTMLElement;
//let child = document.querySelector("actions") as HTMLElement;

//counter1.increase();

//console.log(counter1.value, counter2.value);

//counter2.increase();

//console.log(counter1.value, counter2.value);
// =================================
// let counter = 0;

// function increaseCounter() {
//     counter++;
//     updateValueElement();
// }

// function decreaseCounter() {
//     counter--;
//     updateValueElement();
// }
// =================================
// const counter = {
//     value: 0,
//     increase() {
//         counter.value++;
//         updateValueElement();
//     },
//     decrease() {
//         counter.value--;
//         updateValueElement();
//     }
// };
// =================================
class Counter {
    private _value = 0;

    constructor(private counterElement: HTMLElement) { }


    get value() {
        return this._value;
    }

    public increase() {
        this._value++;
        this.updateValueElement();
    }

    public decrease() {
        this._value--;
        this.updateValueElement();
    }

    public doble() {
        this._value *= 2;
        this.updateValueElement();
    }

    public divide() {
        this._value /= 2;
        this.updateValueElement();
    }

    public theremove() {

    }

    public getbtn (){
        this.counterElement.querySelector("#doble")?.addEventListener("click", this.doble.bind(this));
        this.counterElement.querySelector("#btn-increase")?.addEventListener("click",this.increase.bind(this));
        this.counterElement.querySelector("#divide")?.addEventListener("click", this.divide.bind(this));
        this.counterElement.querySelector("#btn-decrease")?.addEventListener("click", this.decrease.bind(this));
    }

    private updateValueElement() {
    const valueElement = this.counterElement.querySelector(".value");

    if (!valueElement) {
        return;
    }

    valueElement.textContent = this._value.toString();
}}

const counter1 = new Counter(document.getElementById("counter1")!);
counter1.getbtn();

const counter2 = new Counter(document.getElementById("counter2")!);
counter2.getbtn();

// =================================


//document.getElementById("remove")?.addEventListener("click",function (){
//    counter1.theremove();
//});


