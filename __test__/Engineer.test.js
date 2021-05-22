const Engineer = require ('../lib/Engineer')


test ('Create an Employee Object ', () => {
    const engineer = new Engineer ('Sam')
    expect(typeof(engineer)).toBe('object');
})