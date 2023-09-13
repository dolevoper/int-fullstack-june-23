const arr: { name: string; subject: string; }[] = []


function app() {
    const promptText = `Welcome to app!
    What would you like to do?
    1. Add a new teacher
    2. Select a teacher by id
    3. Select a teacher by name
    4. Display all teachers
    5. Delete a teacher by id
    6. Add multiple teachers`;



    let userInput = prompt(promptText);

    while (userInput !== null) {
        handleUserInput(userInput);
        userInput = prompt(promptText);
    }

}

function handleUserInput(userInput: string) {
    switch (userInput.trim()) {
        case "1":
            addTeacher();
            break;
        case "2":
            showTecherById();
            break;
        case "3":
            showTeacherByName();
            break;
        case "4":
            display();
            break;
        case "5":
            deleteTeacherById();
            break;
        case "6":
            addMultipleTeachers();
            break;
        default:
            alert("Please choose an option from the menu using their numbers.");
    }
}

function addTeacher() {
    const name = String(prompt("Please enter the name of the Teacher"));
    const subject = String(prompt("Please enter the subject the teacher teach"));
    arr.push({ name: name, subject: subject });

}

function showTecherById() {
    const userInput = Number(
        prompt(`Please enter Teacher Id between 1 and ${arr.length}`)
    );

    if (
        isNaN(userInput) ||
        !Number.isInteger(userInput) ||
        userInput < 1 ||
        userInput > arr.length
    ) {
        alert("Invalid Teacher Id.");
        return;
    }

    showTeacher(userInput - 1);
}

function showTeacherByName() {
    const userInput = prompt("Please enter the Teacher's name")?.trim();
    const TeacherByName = arr.filter(function (teacher) {
        return teacher.name.toLowerCase() === userInput?.toLowerCase();
    });

    if (!TeacherByName.length) {
        alert(`No Teacher by ${userInput} in our database.`);
    }

    const randomIndex = Math.floor(Math.random() * TeacherByName.length);
    const originalTeacherIndex = arr.indexOf(TeacherByName[randomIndex]);

    showTeacher(originalTeacherIndex);


}

function deleteTeacherById() {
    display();

    const userInput = Number(
        prompt(`Please enter the Teacher ID you want to delete (between 1 and ${arr.length})`)
    );

    if (
        isNaN(userInput) ||
        !Number.isInteger(userInput) ||
        userInput < 1 ||
        userInput > arr.length
    ) {
        alert("Invalid Teacher ID.");
        return;
    }

    const indexToDelete = userInput - 1;
    const deletedTeacher = arr.splice(indexToDelete, 1)[0];

    alert(`Teacher ${indexToDelete + 1} (${deletedTeacher.name}) has been deleted.`);
}

function addMultipleTeachers() {
    const count = Number(prompt("How many teachers do you want to add?"));

    if (isNaN(count) || !Number.isInteger(count) || count < 1) {
        alert("Invalid input. Please enter a positive integer.");
        return;
    }

    for (let i = 0; i < count; i++) {
        addTeacher();
    }
    alert(`Added ${count} teacher(s) successfully.`);
}



function showTeacher(index: number) {
    const arrTeacher = arr[index];

    alert(` Teacher id #${index + 1}:\n${arrTeacher.name}\n\n${arrTeacher.subject}`);
}

function display() {
    for (let i = 0; i < arr.length; i++) {
        const display2 = arr[i];
        alert(`Teacher ${i + 1}:\nName: ${display2.name}\nSubject: ${display2.subject}`);
    }
}
app()