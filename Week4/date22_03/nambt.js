class Student {
    name
    age
    id
    gender

    constructor(id, name, age, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getId() {
        return this.id;

    }

    getGender() {
        return this.gender;
    }


    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    setId(id) {
        this.id = id;
    }

    setName(name) {
        this.name = name;
    }


    setAge(age) {
        this.age = age;
    }


    setGender(gender) {
        this.gender = gender;
    }

}

let student1 = new Student();
student1.setId(1);
student1.setName("Khắc Chữ");
student1.setAge(18);
student1.setGender("Male");
console.log(student1);
editGender(student1);

function editGender(student1) {
    student1.setGender("Female");


}

console.log(student1);

