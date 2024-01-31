let pushupCount = 0;
let plankMinutes = 0;
let milesRan = 0;

let pCount = document.getElementById('pushup-count')
let pMinutes = document.getElementById('plank-minutes')
let rMiles = document.getElementById('miles-ran')

function increment(activity) {
    switch (activity) {
        case 'pushup':
            pushupCount++;
            pCount.textContent = pushupCount;
            break;
        case 'plank':
            plankMinutes++;
            pMinutes.textContent = plankMinutes;
            break;
        case 'run':
            milesRan++;
            rMiles.textContent = milesRan;
            break;
        default:
            break;
    }
}

function save(activity) {
    let pushup = 0
    let plank = 0
    let run = 0
    switch (activity) {
        case 'pushup':
            pushup = document.getElementById('pushup-history');
            pushup.textContent = pushup.textContent + pushupCount + " - "
            pushupCount = 0
            pCount.textContent = 0
            break;
        case 'plank':
            plank = document.getElementById('plank-history');
            plank.textContent = plank.textContent + plankMinutes + " - "
            plankMinutes = 0
            pMinutes.textContent = 0
            break;
        case 'run':
            run = document.getElementById('run-history');
            run.textContent = run.textContent + milesRan + " - "
            milesRan = 0
            rMiles.textContent = 0
            break;
        default:
            break;
    }

}
