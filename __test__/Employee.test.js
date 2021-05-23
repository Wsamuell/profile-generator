const Employee = require ('../lib/Employee')


test ('Create an Employee Object that should return object ', () => {
    const employee = new Employee ('Sam')
    expect(typeof(employee)).toBe('object');
})