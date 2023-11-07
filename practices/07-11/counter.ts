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

  constructor(private counterElement: HTMLElement) {}

  get value() {
    return this._value;
  }

  bindEvents() {
    this.counterElement
      .querySelector(".btn-increase")
      ?.addEventListener("click", this.increase.bind(this));
    this.counterElement
      .querySelector(".btn-double")
      ?.addEventListener("click", this.double.bind(this));
    this.counterElement
      .querySelector(".btn-decrease")
      ?.addEventListener("click", this.decrease.bind(this));
    this.counterElement
      .querySelector(".btn-delete")
      ?.addEventListener("click", this.deleteBtn.bind(this));
  }

  increase() {
    this._value++;
    this.updateValueElement();
  }

  double() {
    this._value *= 2;
    this.updateValueElement();
  }

  decrease() {
    this._value--;
    this.updateValueElement();
  }

  deleteBtn() {
    this.counterElement.remove();
  }

  updateValueFromStorage() {
    this._value = Number(sessionStorage.getItem(this.counterElement.id))
    this.updateValueElement();
  }

  private updateValueElement() {
    const valueElement = this.counterElement.querySelector(".value");

    if (!valueElement) {
      return;
    }

    valueElement.textContent = this._value.toString();
  }
}

const counter1 = new Counter(document.getElementById("counter1")!);
counter1.bindEvents();
counter1.updateValueFromStorage();

const counter2 = new Counter(document.getElementById("counter2")!);
counter2.bindEvents();
counter2.updateValueFromStorage();

// counter1.increase();

console.log(counter1.value, counter2.value);

// counter2.increase();

console.log(counter1.value, counter2.value);
// =================================

const btnAddCounter = document.querySelector("#btn-add-counter");
const cluster = document.querySelector(".cluster");

btnAddCounter?.addEventListener("click", () => {
  const id = new Date().getTime();

  cluster!.innerHTML += `
    <article id="counter${id}" class="counter">
            <button class="btn-delete">DELETE THIS</button>
            <div class="value">0</div>
            <div class="actions">
                <button class="btn-increase">➕</button>
                <button class="btn-double">✖️2️</button>
                <button class="btn-decrease">➖</button>
            </div>
        </article>
    `;

  //add article as a child to cluster
  // const article = document.createElement("article");
  // cluster?.appendChild(article);
  // article.classList.add("counter");
  // article.setAttribute("id", `counter${id}`);

  // // add children to article
  // const btnDelete = document.createElement("button");
  // article.appendChild(btnDelete);
  // btnDelete.classList.add("btn-delete");
  // btnDelete.innerText = "DELETE THIS";


  const addedCounter = new Counter(document.getElementById(`counter${id}`)!);
  addedCounter.bindEvents();
});

addEventListener("beforeunload", (event) => {
  const articles = document.querySelectorAll(".counter")
  articles.forEach((article) => {
    sessionStorage.setItem(article.id, article.children[1].innerHTML)
  })
});
