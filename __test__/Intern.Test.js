const Intern = require ('../lib/Intern')


test ('Create an Employee Object ', () => {
    const intern = new Intern ('Sam')
    expect(typeof(intern)).toBe('object');
})