class Account{
    username
    password

    constructor(id, username, password) {
        this.username = username;
        this.password = password;
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    } getUser(){
        return this.username;
    }
    setUser(id){
        this.username = username;
    } getPassword(){
        return this.password;
    }
    setPassword(id){
        this.password = password;
    }
}