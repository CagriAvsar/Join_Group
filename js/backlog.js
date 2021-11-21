/* BACKEND INTEGRATION */
let allTasks = [];

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
    showBackLogs();
}

// function deleteUser(name) {
//     backend.deleteItem('users');
// }


function showBackLogs(i) {
    let backlogsContainer = document.getElementById('backlogsContainer');
    backlogsContainer.innerHTML = ``;
    for (let i = 0; i < allTasks.length; i++) {
        renderBackLogs(i);
    }
}


function renderBackLogs(i) {
    let task = allTasks[i];
    let category = allTasks[i]['category'];
    backlogsContainer.innerHTML += `
<div class="task-info-container">   
  <div class="assigned-container">               
    <div>
      <img src="${task['assigned-to'][0]['img']}" class="task-img">
    </div>
       <div class="backlog-title-and-email wid-30">
           <span>${task.title}</span>
           <a href="mailto:${task['assigned-to'][0]['e-mail']}" class="mail-link"><span>${task['assigned-to'][0]['e-mail']}</a> 
       </div> 
    </div>  
      <div class="wid-20 txt-algn">${task.category}</div>
        <div class="wid-30 over-flow-bw">${task.description}</div>
</div>
    `;
    changeColor(category);
}

function changeColor(category) {
    let color;
    if (category == 'Management') {
        color = 'yellow';
        document.querySelector('.task-info-container').style = `border-left: solid 8px ${color};`
    }
    if (category == 'Development') {
        color = 'green';
        document.querySelector('.task-info-container').style = `border-left: solid 8px ${color};`
    }
    if (category == 'Marketing') {
        color = 'red';
        document.querySelector('.task-info-container').style = `border-left: solid 8px ${color};`
    }
    if (category == 'Design') {
        color = 'rebeccapurple'
        document.querySelector('.task-info-container').style = `border-left: solid 8px ${color};`
    }
}


// // Arrow function
// let changeColor = (color) => {
//     return document.getElementById('backlogsContainer').style = `border-left: solid 6px ${color};`
// },