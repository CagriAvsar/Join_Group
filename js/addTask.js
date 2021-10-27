let allTasks = [];

async function init() {
    setURL('http://gruppe-114.developerakademie.net/Kanban%20Gruppenarbeit/js/mini_backend.js');
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}




function addTask() {
    let title = document.getElementById('title-input').value;
    let category = document.getElementById('category-dropdown').value;
    let description = document.getElementById('description-input').value;
    let duedate = document.getElementById('due-date-input').value;
    let urgency = document.getElementById('urgency-dropdown').value;
    let assignedto = document.getElementById('assigned-to-pics').img; /* funktioniert noch nicht */



    console.log('The Title is ', title);
    console.log('The Category is ', category);
    console.log('The Description is ', description);
    console.log('The Due Date is ', duedate);
    console.log('The Urgency is ', urgency);
    console.log('The Assigned to is ', assignedto); /* funktioniert noch nicht */

    let task = {
        'title': title,
        'category': category,
        'description': description,
        'duedate': duedate,
        'urgency': urgency,
        'assigned to': assignedto,
        /* funktioniert noch nicht */
        'createdate': new Date().getTime()
    };



    allTasks.push(task);

    console.log(allTasks);

    let AllTasksAsString = JSON.stringify(allTasks);
    localStorage.setItem('allTasks', AllTasksAsString);

}

function pickDate() {
    const input = document.getElementById('due-date-input');
    const datepicker = new TheDatepicker.Datepicker(input);
    datepicker.render();
}

function showAssignedToPics() {
    document.getElementById('assigned-to-pics').classList.remove('d-none');
    document.getElementById('assigned-to-pics').classList.add('d-show');
}


function cancel() {
    document.getElementById('assigned-to-pics').classList.add('d-none');
    document.getElementById('assigned-to-pics').classList.remove('d-show');
}