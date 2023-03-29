function login() {
    let username = getElementById("user_name").innerHTML;
    let password = getElementById("pass_word").innerHTML;
    let login = getElementById("login").innerHTML;

    if (username == "user" && password =="123"){
        console.log("Đăng nhập tài khoản User");
        else if (username == "admin" && password == "123"){
            console.log("Đăng nhập bằng tài khoản Admin");
        }
        else
            console.log("Tài khoản không tồn tại");

    }
    
}
