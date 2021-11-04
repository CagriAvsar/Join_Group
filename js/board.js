async function init() {
  setURL('http://gruppe-114.developerakademie.net/smallest_backend_ever');
  await downloadFromServer();
  allTasks = JSON.parse(backend.getItem('allTasks')) || [];
  includeHTML();
  updateHTML();
  }

let currentDraggedElement = [];


function updateHTML() {
  // update to do //
  let todo = allTasks.filter(t => t['phase'] == 'to-do');

  document.getElementById('to-do').innerHTML = '';

  for (let i = 0; i < allTasks.length; i++) {
    const element = allTasks[i];
    document.getElementById('to-do').innerHTML += generateToDoHTML(element);
  }
  // update in progress //
  let inprogress = allTasks.filter(t => t['phase'] == 'in-progress');

  document.getElementById('in-progress').innerHTML = '';

  for (let i = 0; i < allTasks.length; i++) {
    const element = allTasks[i];
    document.getElementById('in-progress').innerHTML += generateToDoHTML(element);

  // update testing //

  // update done //
  }
}

function startDragging(id) {
  currentDraggedElement = id;
}

function generateToDoHTML(element) {

  return `<div draggable="true" ondragstart="startDragging(${element['id']}"> ${element['title']} <div>`;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function moveTo(phase) {
  allTasks[currentDraggedElement]['phase'] = phase; // Phase ändert sich zu "in Progress" oder anderen //
  updateHTML();
}
