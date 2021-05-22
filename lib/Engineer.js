const Employee = require('./Employee')

class Engineer extends Employee {
    Constructor(github) {
        this.github = github;
    };
    getGithub() {
        return this.github;
    };
    getRole() {
        super();
        return 'Engineer'
    }
};

module.exports = Engineer;