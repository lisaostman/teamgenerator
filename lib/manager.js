class Manager {
    constructor(name, id, email, office, title){
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        this.title = title;
    }
    
    getTitle() {
        return this.title;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;