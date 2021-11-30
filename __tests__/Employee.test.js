const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Dave', '100', 'daveoliverio@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});


test('gets employee name', () => {
    const employee = new Employee('Dave', '100', 'daveoliverio@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Dave', '100', 'daveoliverio@gmail.com');

    expect(employee.id).toEqual(expect.any(String));
});

test('gets employee email', () => {
    const employee = new Employee('Dave', '100', 'daveoliverio@gmail.com');

    expect(employee.email).toEqual(expect.any(String));
});