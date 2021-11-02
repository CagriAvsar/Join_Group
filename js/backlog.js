/* BACKEND INTEGRATION */
let allTasks = ['hallo'];

let users = [{
        'name': 'Marian',
        'e-mail': 'marianwill@gmail.com',
        'img': 'imgs/user1.JPG'
    },
    {
        'name': 'Cagri',
        'e-mail': 'cagriavsa@gmail.com',
        'img': 'imgs/user2.JPG'
    },
    {
        'name': 'Typ',
        'e-mail': 'dertyp@gmail.com',
        'img': 'imgs/user3.JPG'
    }
];

async function init() {
    setURL('http://gruppe-114.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
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
        backlogsContainer.innerHTML += `
        <a>X</a>
        <div class="task-info-container">
          <span>${task.title}</span>
          <span>${task.category}</span>
          <span>${task.description}</span>
        </div>
        `;
    }
}