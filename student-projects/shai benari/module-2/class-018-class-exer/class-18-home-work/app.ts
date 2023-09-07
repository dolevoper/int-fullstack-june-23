const studentsNames:any = [];
const studentsAge = [];
const teacherNames:any = []
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
ageToArray("name",0);
alert("The studants ages are :" +" " + studentsNames);
seniorityToArray("name",0);
alert("The teachers seniority is :" +" " + teacherNames);


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


