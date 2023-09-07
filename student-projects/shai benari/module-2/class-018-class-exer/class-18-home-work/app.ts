console.log("connected")
const studentsNames:any = [];
const studentsAge = [];
const teacherNames:any = []
const classGrade6:any = []
const classGrade8:any = []
const classGrades: any = []
const classMaigor: any = []
const students = [
    {
        class: "studant",
        name: "yotam", 
        age: 12,
        grade: 6,
        gender: "male",
        maigor: "english"

    },
    {
        class: "studant",
        name: "yael", 
        age: 15,
        grade: 8,
        gender: "female",
        maigor: "gymnastics"
    },
    {
        class: "studant",
        name: "ronit", 
        age: 15,
        grade: 8,
        gender: "female",
        maigor: "science",
    },
    {
        class: "studant",
        name: "itay", 
        age: 15,
        grade: 8,
        gender: "male",
        maigor: "english"
    },
    {
        class: "studant",
        name: "oren", 
        age: 12,
        grade: 6,
        gender: "male",
        maigor: "literature"
    },
    {
        class: "studant",
        name: "tom", 
        age: 12,
        grade: 6,
        gender: "male",
        maigor: "gymnastics"
    },
    {
        class: "studant",
        name: "liat", 
        age: 12,
        grade: 6,
        gender: "female",
        maigor: "science"
    },
    {
        class: "studant",
        name: "lilach", 
        age: 12,
        grade: 6,
        gender: "female",
        maigor: "literature"
    },
]
const teachers = [
    {
    name: "liat",
    class: "teacher",
    sobject: "english",
    seniority: 15
    },
    {
        name: "yoram",
        class: "teacher",
        sobject: "gymnastics",
        seniority: 7
    },
    {
        name: "ilan",
        class: "teacher",
        sobject: "science",
        seniority: 22
    },
    {
        name: "rotem",
        class: "teacher",
        sobject: "literature",
        seniority: 18
    },
]

const promptText = `Welcome to quotes app!

What would you like to do?
    a. list of studants and there ages
    b. lis of teacher and there expirance in teaching 
    c. class dividing by grade
    d. teachor and class by sobject`;

    let userInput = prompt(promptText);

    while (userInput !== null) {
        handleUserInput(userInput);
        userInput = prompt(promptText);
    }

function handleUserInput(userInput: string) {
    console.log(userInput)
    switch (userInput.trim()) {
        case "a":
            const ages = ageToArray("name",0);
            // alert(ages)
            break;
        case "b":
            seniorityToArray("name",0);
            break;
        case "c":
            classToArray("name",0);
            case "d":
                classMigor("name","sobject","maigor");
        default:
            alert("Please choose an option from the menu using their leters.");
    }
}

// ageToArray("name",0);
// alert("The studants ages are :" +" " + studentsNames);
// seniorityToArray("name",0);
// alert("The teachers seniority is :" +" " + teacherNames);
// classToArray("name",0);
// alert("The studants in clas grade 6 are :" + " " + classGrade6);
// alert("The studants in clas grade 8 are :" + " " + classGrade8);
// classMigor("name","sobject","maigor");
// alert("teachor and class by sobject :  " + classMaigor);


function ageToArray(name: string , age: number ){
    for (const type in students ){
      let names = students[type].name;
      const toarrayName =studentsNames.push(names + " " + "age: "); 
      let ages = students[type].age;
      const toarrayAge = studentsNames.push(ages + " ");  
         
    }
    return(studentsNames); 
}
function seniorityToArray(name: string , age: number ){
    for (const type in teachers ){
      let names = teachers[type].name;
      const toarrayName =teacherNames.push(names + " " + "seniority: "); 
      let senioritys = teachers[type].seniority;
      const toarrayAge = teacherNames.push(senioritys + " ");  
         
    }
    return(teacherNames); 
}
function classToArray(name: string , grade: number ){
    for (const type in students ){
      let names = students[type].name;
      let grade = students[type].grade;
      if (grade === 6){
        const classSmall = classGrade6.push((names));
      }
      else if (grade === 8) {
        const classBig = classGrade8.push((names));
      }

      const classGrades = [classGrade6 , classGrade8];
       
    }
    return(classGrades);
}
function classMigor(name: string , maigor: string , sobject: string ){
    for (const type1 in teachers ){
        let nameTeachor = teachers[type1].name;
        let sobject = teachers[type1].sobject;
        const classMaigor1 = classMaigor.push(("**"+ nameTeachor + ": "));
        const classMaigor2 = classMaigor.push(( "--" + sobject + ": "));
    for (const type in students ){
      let nameSutdent = students[type].name;
      let maigor = students[type].maigor;
      if (maigor === sobject){
        const classMaigor3 = classMaigor.push((nameSutdent + " / "));
      }
    }
    }
      return(classMaigor);
    }
    

