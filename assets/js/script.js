const login = document.getElementById('loginIn');
const create = document.getElementById('loginUp');
const menErrorLogin = document.getElementById('loginError');
const menErrorCreate = document.getElementById('createError')

function createAccount(){
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(username === "" || email === "" || password === ""){

        menErrorCreate.style.display = 'block';
    }else{
        
        localStorage.setItem('name', username);
        localStorage.setItem('mail', email);
        localStorage.setItem('pass', password);
        hiden();
    }
}

const logar = () => {
    const loginInputName = document.getElementById('loginInputName').value;
    const loginInputPassword = document.getElementById('loginInputPassword').value;

    if(loginInputName === localStorage.getItem('name') && loginInputPassword === localStorage.getItem('pass')){
        menErrorLogin.style.display = 'none';
        let loading = document.getElementById('loading');
        loading.style.display = 'flex';

    }else{
        menErrorLogin.style.display = 'block';
    }
}

function show(){
    create.style.display = 'block';
}

function hiden(){
    create.style.display = 'none';
}