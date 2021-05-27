const Intern = require("../lib/Intern");

describe("Engineer", () => {
    it('can iniatie Employee instance', () => {
        const emp = new Intern();
        expect(typeof(emp)).toBe("object");
    });
    it('will test name of const', () => {
        const name = "Drigo";
        const emp = new Intern(name);
        expect(emp.name).toBe(name);
    });
    it('will test ID of const', () => {
        const testID = 100;
        const emp = new Intern ("Name", testID);
        expect(emp.id).toBe(testID);
    });
    it('will test  email of constr', () => {
        const email = `drigo@test.com`;
        const emp = new Intern ("Name", 2, email);
        expect(emp.email).toBe(email);
    });
    it('will test school from constructor', () =>{
        const school = `UCR`
        const emp = new Intern ("Drigo", 2, "drigo@test.com",school);
        expect(emp.school).toBe(school);
    });

    // getName
    describe("getname",() => {
        it('can get name via getName', () => {
            const name = "Drigo";
            const emp = new Intern (name);
            expect(emp.getName()).toBe(name);
        });
    });

    // getID
    describe("getID",() => {
        it('can get name via getName', () => {
            const testID = 2;
            const emp = new Intern ("Drigo", testID);
            expect(emp.getID()).toBe(testID);
        });
    });

    // getEmail
    describe("getEmail",() => {
        it('can get name via getName', () =>{
            const email = `drigo@test.com`
            const emp = new Intern ("Drigo", 2, email);
            expect(emp.getEmail()).toBe(email);
        });
    });

      // getSchool
      describe("getGithub",() => {
        it('can get name via getName', () =>{
            const school = `UCR`
            const emp = new Intern ("Drigo", 2, "drigo@test.com",school);
            expect(emp.getSchool()).toBe(school);
        });
    });

    // getRole
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const role = "Intern";
            const emp = new Intern ("Drigo", 2, "Drigo@test.com", "UCR");
            expect(emp.getRole()).toBe(role);
        });
    });
});