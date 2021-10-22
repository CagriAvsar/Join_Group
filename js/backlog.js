let users = [];

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    setURL('http://developerakademie.com/smallest_backend_ever');
}


function addUser() {
    let title = document.getElementById('title-input').value;
    let category = document.getElementById('category-dropdown').value;
    let description = document.getElementById('description-input').value;
    let duedate = document.getElementById('due-date-input').value;
    let urgency = document.getElementById('urgency-dropdown').value;
    let assignedto = document.getElementById('assigned-to').value;

    users.push(task.value);
    backend.setItem('users', JSON.stringify(users));

    let task = {
        'title': title,
        'category': category,
        'description': description,
        'duedate': duedate,
        'urgency': urgency,
        'assigned to': assignedto,
        'createdate': new Date().getTime()
    };

    renderBackLogs()
}

function deleteUser(name) {
    backend.deleteItem('users');
}

function renderBackLogs() {
    let backlogsContainer = document.getElementById('backlogsContainer');

    backlogsContainer.innerHTML = ``;
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        backlogsContainer.innerHTML = `
        <div class="task-info-container">

        </div>
        `;
    }
}