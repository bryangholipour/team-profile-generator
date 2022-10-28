// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor(getName,getId,getEmail,getSchool) {
     this.name = getName;
     this.id = getId;
     this.email = getEmail;
     this.school = getSchool;
     this.role = "Intern"
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return this.role
    }
 }
 
 module.exports = Intern