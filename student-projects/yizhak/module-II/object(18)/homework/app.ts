//תוכנה לשליטה במשכורות
//לעשות תפקיד מנהל, עובד רגיל,וסטאזר
//להדפיס לכל אחד משכורות ושעות עבודה
//להדפיס רשימה של כל העובדים רשימה של כל המנהלים
//חישוב של כל המשכורות של כל קבוצה לחוד ושל כולם יחד
const Director = {
  names: ["bob", "jesica", "oren"],
  salary: 15000,
  workHours: 7,
};

const worker = {
  names: [
    "Emily",
    "Jackson",
    "Sophia",
    "Liam",
    "Olivia",
    "Noah",
    "Ava",
    "Ethan",
    "Mia",
    "Aiden",
    "Isabella",
    "Lucas",
    "Harper",
    "Mason",
    "Evelyn",
    "Oliver",
    "Charlotte",
    "Elijah",
    "Amelia",
    "Benjamin",
  ],

  salary: 8000,

  workHours: 9,
};

const intern = {
  names: ["Emma", "William", "Grace", "James", "Lily"],

  salary: 6000,

  workHours: 10,
};

function payPerHour(workHours: number, salary: number) {
  const month = workHours * 20;
  const perhour = salary / month;
  alert(perhour);
}


const userInput = prompt(`hello and Welcome to the factory data control system,
 what would you like to do?
 1. print the director data.
 2. print the worker data.
 3. print the intern data`);

 switch(userInput){
    case "1":
        alert(`this is the directors list:
names: ${Director.names}.
salary: ${Director.salary}.
work-houres in day: ${Director.workHours}. `);
        break;
    case "2":
        alert(`this is the directors list:
names: ${worker.names}.
salary: ${worker.salary}.
work-houres in day: ${worker.workHours}. `);
        break;
    case "3":
        alert(`this is the directors list:
names: ${intern.names}.
salary: ${intern.salary}.
work-houres in day: ${intern.workHours}. `);
        break;
}

