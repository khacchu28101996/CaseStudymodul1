let newAccount = new Account(1, "DoanChu", "123");
let arrAccount = [newAccount]

function checkAccount(username, password){
    for(let i = 0; i<arrAccount.length; i++){
        if(username === arrAccount[i].username
            && password === arrAccount[i].password){
            return true;
        }
    }
    return false;
}


function login(){
    console.log(arrAccount);
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username === "" || password === ""){
        alert("Mời nhập thông tin!")
    }
    else {
        let kq = checkAccount(username, password);
        if(kq === true){
            alert("Đăng nhập thành công");
        }
        else {
            alert("Đăng nhập thất bại");
        }
    }
}

function register(){
    let id = document.getElementById("info").value;
    let name = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let acc = new Account(id, name, pass);
    arrAccount.push(acc);
    alert("Đăng ký thành công!")
}