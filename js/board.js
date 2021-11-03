async function init() {
  setURL('http://gruppe-114.developerakademie.net/smallest_backend_ever');
  await downloadFromServer();
  allTasks = JSON.parse(backend.getItem('allTasks')) || [];
  includeHTML();
  updateHTML();
  }

function updateHTML() {
  let open = allTasks.filter(t => t['phase'] == 'open');

  document.getElementById('to-do').innerHTML = '';

  for (let i = 0; i < allTasks.length; i++) {
    const element = allTasks[i];
    document.getElementById('to-do').innerHTML += generateToDoHTML(element);
  }
}

function generateToDoHTML(element) {
  return `<div draggable="true" ondragstart="startDragging()"> ${element['title']} <div>`;
}

/* function startDragging() */