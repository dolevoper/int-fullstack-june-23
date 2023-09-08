/*
Build a simple data management system.
The system should have an array of objects and allowed operations the user can execute from a main menu.
You choose the theme (what the objects represent) and the allowed operatios.

Try to have more "interesting" entity - try to have fields that are arrays or objects and not only numbers and strings.

Extra level of difficulty:
Add another entity to your system and model the relation between the entities and add operations on the relation.
Example: students and teachers - you can manage the students separately (add student, modify his details, remove student, etc.), you can manage the teachers separately (add, modify, remove, etc.) and there is also a relation between students and teachers (a student can take a class with a teacher). So there are also operations on the **relation** (enroll a student into a class, student quits a class, etc.)
*/

const Cars: any = {};
const myArrayAfter = [];
let myCarIs: number | string = "";
const myArray = ['name', 'model', 'weight', 'color', 'doors'];

initCreateUsers();

function initCreateUsers() {

    var myCar = Number(prompt("Plaese choose from the menu:\n1 - Add car\n2 - Edit car\n3 - Delete car", ""));
    var Status = validate(myCar);
    if (Status) {
        selectChooise(myCar);
    }
    else {
        initCreateUsers();
    }

}

function selectChooise(myCar: number) {
    switch (myCar) {
        case 1:         // Add new car
            addNewCar();
            break;
        case 2:         // Edit car
            editCar();
            break;
        case 3:         // Delete car
            deleteCar();
            break;
        default:
            alert("Not valid number, plaese choose from 1 - 3, try again");
            initCreateUsers();
            break;
    }
}


function addNewCar() {

    for (var i = 0; i < myArray.length; i++) {
        myCarIs = prompt("Enter " + myArray[i] + " to the new object", "");
        myArrayAfter.push(myCarIs);
    }

    const CarsNewProps = { name: myArrayAfter[0], model: myArrayAfter[1], weight: myArrayAfter[2] + "kg", color: myArrayAfter[3], doors: myArrayAfter[4] };
    Cars = JSON.parse(localStorage.getItem("myListObject") || "[]");
    Cars = [...Cars, CarsNewProps];
    localStorage.setItem("myListObject", JSON.stringify(Cars));

}

function editCar() {
    let carsList: string = "";

    Cars = JSON.parse(localStorage.getItem("myListObject") || "[]");

    for (let i = 0; i <= Cars.length - 1; i++) {
        carsList = carsList + Cars[i].name + "\n";
    }

    const editCarChoosen = prompt("Enter the name of car you want to edit\n" + carsList, "");

    var StatusForEdit = validateForDelete(String(editCarChoosen));

    if (StatusForEdit) {

        for (let i = 0; i <= Cars.length - 1; i++) {
            carsList = carsList + Cars[i].name + "\n";

            if (Cars[i].name === editCarChoosen) {

                const whatPropsToEdit = Number(prompt("Enter what properties to change\n1 - name\n2 - model\n3 - weight\n4 - color\n5 - doors", ""));
                const StatusPropsEdit = validate(whatPropsToEdit);

                if (StatusPropsEdit) {
                    editTheProps(Number(whatPropsToEdit));
                } else {
                    alert("not valid");
                }

            }

        }
    } else {
        //editCar()
    }
}

function editTheProps(myProps: number) {
    
    Cars = JSON.parse(localStorage.getItem("myListObject") || "[]");

    for (let i = 0; i < Cars.length ; i++) {
        //alert(i);
        if (Cars[i][myProps] === myProps) {
            
            //Cars[i].name="qqqqqqqqqqq";
        }
    }

    //console.log(Cars);
}

function deleteCar() {
    let carsList: string = "";

    Cars = JSON.parse(localStorage.getItem("myListObject") || "[]");

    if (Cars.length < 1) {
        alert("The list is empty, please enter new cars");
        addNewCar();
    } else {

        for (let i = 0; i <= Cars.length - 1; i++) {
            carsList = carsList + Cars[i].name + "\n";
        }

        const delCar = prompt("Plaese choose what car you want to delete from the list:\n" + carsList);

        var StatusForDelete = validateForDelete(String(delCar));

        if (StatusForDelete) {
            for (let i = 0; i <= Cars.length - 1; i++) {

                if (Cars[i].name === delCar) {
                    Cars.splice(i, 1);
                    localStorage.setItem("myListObject", JSON.stringify(Cars));
                    break;
                }
            }

        } else {
            deleteCar();
        }
    }

}

function validateForDelete(carDelete: string) {

    if (carDelete === "" || Number(carDelete)) {
        alert("Please enter valid string, try again");
        return false;
    } else {
        return true;
    }

}

function validate(myCar: number) {

    if (isNaN(myCar) || !Number.isInteger(myCar) || myCar < 1) {
        alert("Enter only integer number please, try again");
        return false;
    }
    else {
        return true;
    }

}
