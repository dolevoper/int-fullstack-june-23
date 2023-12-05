
import { Obj, Objs, complex_Obj /* , funcs */ } from "dist/foo.js";

const obj: Obj = {};
const  objs: Objs = {};
const complex_obj: complex_Obj = {};


function playClickSound() {

    const audio = new Audio("chime.wav");
    audio.play();
}

document.getElementById('addObject')?.addEventListener('click', function() {
    playClickSound();

});

document.getElementById('removeObject')?.addEventListener('click', function() {
    playClickSound();

});

function submitForm(event) {

    event.preventDefault();

    playClickSound();

    const activitySelect = document.getElementById('activity');
    const dateInput = document.getElementById('date');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    const intensity = document.getElementById('intensity');

    const activityObject = {
        typ: activitySelect,
        startTime: startTimeInput,
        endTime: endTimeInput,
        date: dateInput,
        intensity: intensity,
    };

    console.log(activityObject);


    return activityObject;
}



