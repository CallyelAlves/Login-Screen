const login = document.getElementById('loginIn');
const create = document.getElementById('loginUp');
const loginInput = document.getElementById('loginInput').value;
const menError = document.getElementById('loginError');

document.querySelector('#createAccount').addEventListener('click', () => {
    hiden();
});

function createAccount(){
    let username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let name = localStorage.getItem(username);
    localStorage.setItem('username', name)
    alert(name);
}

const logar = () => {
    if(loginInput === ""){
        console.log('certo')
        menError.style.display = 'block';
    }

}

function show(){
    create.style.display = 'block';
}
function hiden(){
    create.style.display = 'none';
}