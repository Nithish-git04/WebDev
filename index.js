function Person(fname, lname, age) {
    this.first_name = fname;
    this.last_name = lname;
    this.age = age;
    this.full_name = function(){
        return this.first_name + " " + this.last_name;
    }
}

Person.prototype.language = "English";

var myself = new Person("John", "Doe", 30);


Person.prototype.change_name = function(newFname, newLname) {
    this.first_name = newFname;
    this.last_name = newLname;
};

let myslef1 = new Person("Jane", "Doe", 25);
myslef1.change_name("Janet", "Smith");

// console.log(myself);