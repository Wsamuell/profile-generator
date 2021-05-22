const Employee = require('./Employee')

class Engineer extends Employee {
    Constructor(github) {
        this.github = github;
    };
    getGithub() {
        return this.github;
    };
    getRole() {
        return 'Engineer'
    }
};

module.exports = Engineer;