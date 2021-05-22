const Employee = require ('../lib/Employee')


test ('Create an Employee Object ', () => {
    const employee = new Employee ('Sam')
    expect(employee).toBe('Object');
})