
class Engineer {
    constructor(name, id, email, github, title){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;