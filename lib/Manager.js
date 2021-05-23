class manager {
    constructor (name,id,email, officeNum){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = officeNum;
    }

    getName(){
        return this.name;
    }

    getID(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getOfficeNum(){
        return this.officeNum;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = manager;