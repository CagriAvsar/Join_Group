/* BACKEND INTEGRATION AND LOAD USERS */

let users = [];
let allTasks = [];


async function init() {
    setURL('http://gruppe-114.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

    includeHTML();
    pickDate();
}

/* USERS */



async function addUser() {
    users.push('Marian', 'Cagri', 'Typ');
    await backend.setItem('users', JSON.stringify(users));
}

/* TASKS  */



async function addTask() {
    let title = document.getElementById('title-input').value;
    let category = document.getElementById('category-dropdown').value;
    let description = document.getElementById('description-input').value;
    let duedate = document.getElementById('due-date-input').value;
    let urgency = document.getElementById('urgency-dropdown').value;

    console.log('The Title is ', title);
    console.log('The Category is ', category);
    console.log('The Description is ', description);
    console.log('The Due Date is ', duedate);
    console.log('The Urgency is ', urgency);

    let task = {
        'title': title,
        'category': category,
        'description': description,
        'duedate': duedate,
        'urgency': urgency,
        /* 'assigned to': selectedUser, /* funktioniert noch nicht */
        'createdate': new Date().getTime()
    };

    allTasks.push(task); /* Pushe in array allTasks die Werte von tasks */

    console.log(allTasks);

    let AllTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', AllTasksAsString);

    /* renderBackLogsTest(); */
}

/* DATEPICKER */

function pickDate() {
    const input = document.getElementById('due-date-input');
    const datepicker = new TheDatepicker.Datepicker(input);
    datepicker.render();
}

/* SHOW PICS */

function showAssignedToPics() {
    document.getElementById('assigned-to-pics').classList.remove('d-none');
    document.getElementById('assigned-to-pics').classList.add('d-show');
}


function cancel() {
    document.getElementById('assigned-to-pics').classList.add('d-none');
    document.getElementById('assigned-to-pics').classList.remove('d-show');
}

/* PUT ARRAY IN CONTAINER */
/*
  function renderBackLogsTest() {
    let backlogsContainerTest = document.getElementById('backlog-test');
  
    backlogsContainerTest.innerHTML = ``;
    for (let i = 0; i < allTasks.length; i++) {
        let task = allTasks[i];
        backlogsContainerTest.innerHTML += `
        <div class="backlog-test">
          ${task['title']}
          ${selectedUser[i]['name']}
          ${selectedUser[i]['E-Mail']}
           <img src="${selectedUser[i]['img']}">
        </div>
        `;
    }
}

*/