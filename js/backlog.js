/* BACKEND INTEGRATION */

async function init() {
    setURL('http://gruppe-114.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}


function deleteUser(name) {
    backend.deleteItem('users');
}

function renderBackLogs() {
    let backlogsContainer = document.getElementById('backlogsContainer');

    backlogsContainer.innerHTML = ``;
    for (let i = 0; i < allTasks.length; i++) {
        let tasks = allTasks[i];
        backlogsContainer.innerHTML = `
        <div class="task-info-container">
            ${tasks.title}
        </div>
        `;
    }
}