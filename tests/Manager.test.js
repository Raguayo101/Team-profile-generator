const Manager = require("../lib/Manager");

describe("Engineer", () => {
    it('can iniatie Employee instance', () => {
        const emp = new Manager();
        expect(typeof(emp)).toBe("object");
    });
    it('will test name of const', () => {
        const name = "Drigo";
        const emp = new Manager(name);
        expect(emp.name).toBe(name);
    });
    it('will test ID of const', () => {
        const testID = 100;
        const emp = new Manager ("Name", testID);
        expect(emp.id).toBe(testID);
    });
    it('will test email of constr', () => {
        const email = `drigo@test.com`;
        const emp = new Manager ("Name", 2, email);
        expect(emp.email).toBe(email);
    });

    it('will test officeNum from constructor', () =>{
        const phoneNum = `55555555`
        const emp = new Manager ("Drigo", 2, "drigo@test.com",phoneNum);
        expect(emp.officeNum).toBe(phoneNum);
    });

    // getName
    describe("getname",() => {
        it('can get name via getName', () => {
            const name = "Drigo";
            const emp = new Manager (name);
            expect(emp.getName()).toBe(name);
        });
    });

    // getID
    describe("getID",() => {
        it('can get name via getName', () => {
            const testID = 2;
            const emp = new Manager("Drigo", testID);
            expect(emp.getID()).toBe(testID);
        });
    });

    // getEmail
    describe("getEmail",() => {
        it('can get name via getName', () =>{
            const email = `drigo@test.com`
            const emp = new Manager ("Drigo", 2, email);
            expect(emp.getEmail()).toBe(email);
        });
    });

      // getOfficeNum
      describe("getGithub",() => {
        it('can get name via getName', () =>{
            const phoneNum = `55555555`
            const emp = new Manager ("Drigo", 2, "drigo@test.com",phoneNum);
            expect(emp.getOfficeNum()).toBe(phoneNum);
        });
    });

    // getRole
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Manager";
            const emp = new Manager ("Drigo", 2, "Drigo@test.com", "UCR");
            expect(emp.getRole()).toBe(testValue);
        });
    });
});