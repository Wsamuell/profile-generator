const Employee = require('./Employee')

class Intern extends Employee {
    Constructor(school) {
        this.school = school;
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        return 'Intern'
    }
};

module.exports = Intern;