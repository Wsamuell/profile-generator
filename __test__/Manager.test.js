const Manager = require ('../lib/Manager')


test ('Create an Employee Object ', () => {
    const manager = new Manager ('Sam')
    expect(typeof(manager)).toBe('object');
})