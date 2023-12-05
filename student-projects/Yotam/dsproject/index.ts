const peopleArray: Person[] = [];

class Person {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  height: number;
  weight: number;
  bmi: number;

  constructor(firstName: string, lastName: string, age: number, gender: string, height: number, weight: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.bmi = this.calculateBMI();
  }

  calculateBMI() {
    const height = this.height;
    const weight = this.weight;
    if (!isNaN(height) && !isNaN(weight)) {
      const bmi = (weight / (height * height)).toFixed(2);
      return parseFloat(bmi); 
    } else {

      return -1; 
    }
  }
  

}


function addPerson(firstName: string, lastName: string, age: number, gender: string, height: number, weight: number) {
  const person = new Person(firstName, lastName, age, gender, height, weight);
  peopleArray.push(person);
}


function handleSubmit(event: Event) {
  event.preventDefault(); 

  const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
  const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
  const age = parseInt((document.getElementById('age') as HTMLInputElement).value);
  const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value;
  const height = parseFloat((document.getElementById('height') as HTMLInputElement).value);
  const weight = parseFloat((document.getElementById('weight') as HTMLInputElement).value);

  addPerson(firstName, lastName, age, gender, height, weight);
  (document.getElementById('recordForm') as HTMLFormElement).reset();
  console.log('People Array:', peopleArray);
}


function saveToLocalStorage() {
  localStorage.SetItem('peopleData', JSON.stringify(peopleArray));
  console.log(Person);
}


function loadFromLocalStorage() {
  const storedData = localStorage.getItem('peopleData');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    if (Array.isArray(parsedData)) {
      peopleArray.push(...parsedData);
      console.log('data loaded into peopleArray');
    } else {
      console.log('loadFromLocalStorage trigerred but failed');
    }
  }
}


loadFromLocalStorage();
  document.getElementById('saveButton')!.addEventListener('click', handleSubmit);
  /*document.getElementById('saveButton')!.addEventListener('click', function () { 
  saveToLocalStorage();
  console.log('Data saved to local storage');
}); */


