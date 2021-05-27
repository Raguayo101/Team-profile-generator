const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it('can iniatie Employee instance', () => {
        const emp = new Engineer();
        expect(typeof(emp)).toBe("object");
    });
    it('will test name of const', () => {
        const name = "Drigo";
        const emp = new Engineer(name);
        expect(emp.name).toBe(name);
    });
    it('will test ID of const', () => {
        const testID = 100;
        const emp = new Engineer ("Name", testID);
        expect(emp.id).toBe(testID);
    });
    it('will test  email of constr', () => {
        const email = `drigo@test.com`;
        const emp = new Engineer("Name",2,email);
        expect(emp.email).toBe(email);
    });
    it('will test github from constructor', () =>{
        const github = `raguayo101`
        const emp = new Engineer("Drigo", 2, "drigo@test.com",github);
        expect(emp.github).toBe(github);
    });

    // getName
    describe("getname",() => {
        it('can get name via getName', () => {
            const name = "Drigo";
            const emp = new Engineer(name);
            expect(emp.getName()).toBe(name);
        });
    });

    // getID
    describe("getID",() => {
        it('can get name via getName', () => {
            const testID = 2;
            const emp = new Engineer("Drigo", testID);
            expect(emp.getID()).toBe(testID);
        });
    });

    // getEmail
    describe("getEmail",() => {
        it('can get name via getName', () =>{
            const email = `drigo@test.com`
            const emp = new Engineer("Drigo", 2, email);
            expect(emp.getEmail()).toBe(email);
        });
    });

      // getGithub
      describe("getGithub",() => {
        it('can get name via getName', () =>{
            const github = `raguayo101`
            const emp = new Engineer("Drigo", 2, "drigo@test.com",github);
            expect(emp.getGithub()).toBe(github);
        });
    });

    // getRole
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const role = "Engineer";
            const emp = new Engineer ("Drigo", 2, "Drigo@test.com", "raguayo101");
            expect(emp.getRole()).toBe(role);
        });
    });
});