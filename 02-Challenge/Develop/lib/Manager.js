// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(getName,getId,getEmail,getOfficeNumber) {
     this.getName = getName;
     this.getId = getId;
     this.getEmail = getEmail;
     this.getOfficeNumber = getOfficeNumber;
    }
 }
 
 module.exports = Manager