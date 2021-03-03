'use strict';

const values = document.querySelectorAll('.value'),
      distances = document.querySelectorAll('[name=distance]');

let pace = 5 * 60 / 1000,  // seconds/meter
    distance,  // meters
    speed, //meters per second (1 / pace)
    time; // 

function getDistance()  {
    parseDistance();
    distance = +[...distances].filter(distance => distance.checked)[0].value;
    setTime(pace, distance);
    // time = distance * pace;
}

function getPace()  {
    pace = parsePace();
    setSpeed(pace);
    setTime(pace, distance);
}

function getSpeed() {
    speed = parseSpeed();
    setPace(pace);
    setTime(pace, distance);
}

function getTime() {
    time = parseTime();
    setPace(time, distance);
    setSpeed(time, distance);
}

function parsePace() {

}


// function getPace() {
//     let m, s;
//     pace = corePace * 1000; //
//     console.log(`${Math.floor(pace / 60)}:${Math.floor(pace % 60)}`);
// }

function bindListener(field) {
    field.addEventListener('input', (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        console.log("data-time" in event.target.attributes);
        // console.log(field.value);
        // console.log(distance);
        // console.log(pace);
    });
}

values.forEach(field => {
    bindListener(field);
});

// init
setCurrentDistance();

// let distance = distances.filter(function(field) {
//     if (field.checked) {
//         return field.value;
//     }
// });

// function getDistance() {
//     distances.forEach(radio => {
//         if (radio.checked) {
//             distance = +radio.value;
//         } 
//     });
// }





