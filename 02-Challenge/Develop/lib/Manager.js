// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(getName,getId,getEmail,getOfficeNumber) {
     this.name = getName;
     this.id = getId;
     this.email = getEmail;
     this.officenumber = getOfficeNumber;
     this.role = "Manager";
    }

    getRole(){
        return this.role
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getOfficeNumber(){
        return this.officenumber
    }
    getEmail(){
        return this.email
    }
 }
 
 module.exports = Manager