const Employee = require('./Employee')


class Manager extends Employee {
    Constructor(officeNumber) {
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber
    };

    getRole() {
        super();
        return 'Manager'
    };
};

module.exports = Manager;