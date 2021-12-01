const Intern = require('../lib/Intern');

test('returns school input from constructor', () => {
    const school = 'Yale'
    const employee = new Intern('Dave', 100, 'daveoliverio@gmail.com', school);

    expect(employee.school).toBe(school);
})

test('getRole() should return intern as a role', () => {
    const role = 'Intern';
    const employee = new Intern('Dave', 100, 'daveoliverio@gmail.com', 'daveoliverio');

    expect(employee.getRole()).toBe(role);
})