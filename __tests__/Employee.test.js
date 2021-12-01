const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const name ='Dave';
    const id = '100';
    const email = 'daveoliverio@gmail.com';
    const employee = new Employee('Dave', '100', 'daveoliverio@gmail.com');

    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
});


test('gets employee name', () => {
    const name = 'Dave';
    const employee = new Employee('Dave', 100, 'daveoliverio@gmail.com');

    expect(employee.name).toBe(name);
});

test('gets employee id', () => {
    const id = '100';
    const employee = new Employee('Dave', '100', 'daveoliverio@gmail.com');

    expect(employee.id).toBe(id);
});

test('gets employee email', () => {
    const email = 'daveoliverio@gmail.com';
    const employee = new Employee('Dave', 100, email);

    expect(employee.getEmail()).toBe(email);
});

test('getRole() should return "Employee"', () => {
    const role = 'Employee';
    const employee = new Employee('Dave', 100, 'daveoliverio@gmail.com');

    expect(employee.getRole()).toBe(role);
})