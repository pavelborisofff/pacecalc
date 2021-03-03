'use strict';

const valueFields = document.querySelectorAll('.value'),
      distanceFields = document.querySelectorAll('[name=distance]'),
      paceFields = document.querySelectorAll('[name=pace]'),
      speedFields = document.querySelectorAll('[name=speed]'),
      timeFields = document.querySelectorAll('[name=time]');

let pace = 5 * 60 / 1000,  // seconds per meter
    distance = getDistance(),  // meters
    speed = 1 / pace, //meters per second (1 / pace)
    time = pace * distance; // seconds

function setMaxLength(value, l = 2) {
    // return (value > 9) ? value : '0'.repeat(l - 1) + value;
    return value;
}

function getPace() {
    console.log(paceFields[0].value, paceFields[1].value);
    return (paceFields[0].value * 60 + paceFields[1].value * 1) / 1000;
}

function getSpeed() {
    return parseFloat(speedFields[0].value + paceFields[1].value) * 1000 / (60 * 60);
}

function getTime() {
    return parseFloat(timeFields[0].value * 60 * 60 + timeFields[1].value * 60 + timeFields[2].value);
}

function setPace(field) {
    switch (field.id) {
        case 'pace_min':
            field.value = setMaxLength(
                Math.floor(pace * 1000 / 60)
            );
            break;
        case 'pace_sec':
            field.value = setMaxLength(
                Math.floor(pace * 1000 % 60)
            );
            break;
    }
}

function setSpeed(field) {
    switch (field.id) {
        case 'dec':
            field.value = setMaxLength(
                Math.floor(speed * 60 * 60 / 1000)
            );
            break;
        case 'pts':
            field.value = setMaxLength(
                Math.floor(speed * 60 * 60 % 1000, 3)
            );
            break;
    }
}

function setTime(field) {
    switch (field.id) {
        case 'hour':
            field.value = setMaxLength(
                Math.floor(time / (60 * 60))
            );
            break;
        case 'min':
            field.value = setMaxLength(
                Math.floor((time % (60 * 60)) / 60)
            );
            break;
        case 'sec':
            field.value = setMaxLength(
                time % 60
            );
            break;
    }
}

function setValues() {
    valueFields.forEach(field => {
        switch (field.name) {
            case 'pace':
                setPace(field);
                break;
            case 'speed':
                setSpeed(field);
                break;
            case 'time':
                setTime(field);
                break;
        }
    });
}

function getDistance()  {
    return +[...distanceFields].filter(distance => distance.checked)[0].value;
}

function bindListener(field) {
    field.addEventListener('input', (event) => {
        console.log(event.target.value);
        switch (event.target.name) {
            case 'distance':
                distance = getDistance();
                speed = 1 / pace;
                time = Math.ceil(pace * distance);
                break;
            case 'pace':
                pace = getPace();
                console.log(pace);
                speed = 1 / pace;
                time = Math.ceil(pace * distance);
                break;
            case 'speed':
                speed = getSpeed();
                pace = 1 / speed;
                time = Math.ceil(pace * distance);
                break;
            case 'time':
                time = getTime();
                pace = time / distance;
                break;
            default:
                console.log(event.target.attributes[0]);
        }

        setValues();
    });
}

valueFields.forEach(field => {
    bindListener(field);
});

// init
getDistance();
setValues();






