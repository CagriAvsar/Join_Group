async function init() {
    setURL('http://gruppe-114.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    includeHTML();
    updateHTML();
}

let currentDraggedElement;
let phase = [];


function updateHTML() {
    // update to do //
    let todo = allTasks.filter(t => t['phase'] == 'to-do');

    document.getElementById('to-do').innerHTML = '';

    for (let i = 0; i < todo.length; i++) {
        const element = todo[i];
        document.getElementById('to-do').innerHTML += generateToDoHTML(element);
    }


    // update in progress //
    let inprogress = allTasks.filter(t => t['phase'] == 'in-progress');

    document.getElementById('in-progress').innerHTML = '';

    for (let i = 0; i < inprogress.length; i++) {
        const element = inprogress[i];
        document.getElementById('in-progress').innerHTML += generateToDoHTML(element);
    }

    // update testing //

    let testing = allTasks.filter(t => t['phase'] == 'testing');

    document.getElementById('testing').innerHTML = '';

    for (let i = 0; i < testing.length; i++) {
        const element = testing[i];
        document.getElementById('testing').innerHTML += generateToDoHTML(element);

    }

     // update done //

    let done = allTasks.filter(t => t['phase'] == 'done');

    document.getElementById('done').innerHTML = '';

    for (let i = 0; i < done.length; i++) {
        const element = done[i];
        document.getElementById('done').innerHTML += generateToDoHTML(element);

    }
}

function startDragging(id) {
    currentDraggedElement = id;
}

function generateToDoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['createdate']})"> ${element['title']} <div>`;
}

function allowDrop(event) {
    event.preventDefault();
}

function moveTo(phase) {
    const task = allTasks.find(t => t.createdate === currentDraggedElement);
    task['phase'] = phase; // Phase ändert sich zu "in Progress" oder anderen //
    updateHTML();
}