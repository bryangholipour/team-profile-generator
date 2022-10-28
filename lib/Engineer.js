// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor(getName,getId,getEmail,getGithub) {
     this.name = getName;
     this.id = getId;
     this.email = getEmail;
     this.github = getGithub;
     this.role = "Engineer"
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
    getGithub(){
        return this.github
    }
    getEmail(){
        return this.email
    }
 }
 
 module.exports = Engineer