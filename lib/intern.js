

class Intern {
    constructor(name, id, email, school, title){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.title = title;
    }


    getTitle() {
        return this.title;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;