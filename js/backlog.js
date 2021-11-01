/* BACKEND INTEGRATION */
let allTasks = [];
let users = [];

async function init() {
    setURL('http://gruppe-114.developerakademie.net/smallest_backend_ever');
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    await downloadFromServer();
    includeHTML();
    renderBackLogs();
}


// function deleteUser(name) {
//     backend.deleteItem('users');
// }

function renderBackLogs() {
    let backlogsContainer = document.getElementById('backlogsContainer');

    backlogsContainer.innerHTML = ``;
    for (let i = 0; i < allTasks.length; i++) {
        let task = allTasks[i];
        backlogsContainer.innerHTML = `
        <div class="task-info-container">
            ${task}
        </div>
        `;
    }
}