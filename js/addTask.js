/* USERS */

let users = [{
        /* 'id': 1, */
        'name': 'Marian',
        'e-mail': 'marianwill@gmail.com',
        'img': 'imgs/user1.JPG'
    },
    {
        /* 'id': 2, */
        'name': 'Cagri',
        'e-mail': 'cagriavsa@gmail.com',
        'img': 'imgs/user2.JPG'
    },
    {
        /* 'id': 3, */
        'name': 'Typ',
        'e-mail': 'dertyp@gmail.com',
        'img': 'imgs/user3.JPG'
    }
];

let selectedUser = [];

let allTasks = [];


/* BACKEND INTEGRATION AND LOAD USERS */

async function init() {
    setURL('http://gruppe-114.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    includeHTML();
    pickDate();
}

/**
 * Adding users with pics to the task
 * 
 * @param {number} index - are numbers 0, 1 and 2.
 */
function addUser(index) {
    selectedUser.push(users[index]);
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
    console.log('The Assigned to is ', selectedUser);
    console.log('The ID is ', new Date().getTime());

    let task = {
        'title': title,
        'category': category,
        'description': description,
        'duedate': duedate,
        'urgency': urgency,
        'assigned-to': selectedUser,
        'createdate': new Date().getTime(),
        'phase': 'to-do' 
    };

    allTasks.push(task); /* Pushe in array allTasks die Werte von tasks */

    console.log(allTasks);

    let AllTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', AllTasksAsString);
    selectedUser = []; /* setze User zurück */
    window.location.href = 'backlog.html';

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