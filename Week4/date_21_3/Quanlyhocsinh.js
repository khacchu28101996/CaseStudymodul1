class Quanlyhocsinh {
    name
    age
    date
    gender

    constructor(name, age, date, gender) {
        this.name = name;
        this.age = age;
        this.date = date;
        this.gender = gender;


        this.name= function (){
            return name;
        }
        this.age = function (){
            return age;
        }
        this.date= function (){
            return date;
        }
        this.gender= function (){
            return gender;
        }




    }

}
let hs1 = new Quanlyhocsinh("Đoàn Khắc Chữ", "27", "28/10/1996", "Male");
let hs2 = new Quanlyhocsinh("Nguyễn Văn A", "27", "28/10/1995", "Male");
let hs3 = new Quanlyhocsinh("Nguyễn Thị Chịu", "27", "28/10/1992", "Female");
let hs4 = new Quanlyhocsinh("Trần Văn Chịu", "27", "28/10/1994", "Male");
let hs5 = new Quanlyhocsinh("Đỗ Thành Đạt", "27", "28/10/1998", "Male");



let student = [];
student.push(hs1,hs2,hs3,hs4,hs5);
console.log(student)



