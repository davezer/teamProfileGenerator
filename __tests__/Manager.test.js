const Manager = require('../lib/Manager');

test('get office number using constructor', () => {
    const officeNumber = '1990';
    const employee = new Manager('Dave', 100, 'daveoliverio@gmail.com', officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});

test('getRole() should return "Manager"', () => {
    const role = "Manager";
    const employee = new Manager('Dave', 100, 'daveoliverio@gmail.com', 'daveoliverio');

    expect(employee.getRole()).toBe(role);
})