'use strict';

const values = document.querySelectorAll('.value'),
      distances = document.querySelectorAll('[name=distance]');

let corePace = 5 * 60 / 1000,  // seconds/meter
    distance,  // meters
    pace,  // seconds/kilometer
    speed, //meters per second (1 / pace)
    time; // 

function setCurrentDistance()  {
    distance = +[...distances].filter(distance => distance.checked)[0].value;
    time = distance * pace;
}

function getPace() {
    let m, s;
    pace = corePace * 1000; //
    console.log(`${Math.floor(pace / 60)}:${Math.floor(pace % 60)}`);
}

function bindListener(field) {
    field.addEventListener('input', () => {
        setCurrentDistance();
        // console.log(field.value);
        console.log(distance);
        console.log(pace);
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





