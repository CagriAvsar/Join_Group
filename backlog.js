let users = [];

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    setURL('http://developerakademie.com/smallest_backend_ever');
}


function addUser() {
    users.push(username.value);
    backend.setItem('users', JSON.stringify(users));
}

function deleteUser(name) {
    backend.deleteItem('users');
}