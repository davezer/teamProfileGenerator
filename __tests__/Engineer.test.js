const Engineer = require('../lib/Engineer');

test('sets gitHub username using constructor', () => {
    const gitHub = 'davezer';
    const employee = new Engineer('Dave', 100, 'daveoliverio@gmail.com', gitHub);
    expect(employee.gitHub).toBe(gitHub);

});

test('getRole() returns the Engineer role to employee', () => {
    const role = 'Engineer';
    const employee = new Engineer('Dave', 100, 'daveoliverio@gmail.com', 'davezer');

    expect(employee.getRole()).toBe(role);

})