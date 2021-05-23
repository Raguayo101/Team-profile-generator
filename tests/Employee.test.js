const Employee = require("../lib/Employee");

describe("Employee", () => {
    it('can iniatie Employee instance', () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe("object");
    });
    it('will test name of const', () => {
        const name = "Drigo";
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    });
    it('will test ID of const', () => {
        const testID = 100;
        const emp = new Employee ("Name", testID);
        expect(emp.id).toBe(testID);
    });
    it('will test  email of constr', () => {
        const email = `drigo@test.com`;
        const emp = new Employee("Name",2,email);
        expect(emp.email).toBe(email);
    });

    // getName
    describe("getname",() => {
        it('can get name via getName', () => {
            const name = "Drigo";
            const emp = new Employee(name);
            expect(emp.getName()).toBe(name);
        });
    });

    // getName
    describe("getID",() => {
        it('can get name via getName', () => {
            const testID = 2;
            const emp = new Employee("Drigo", testID);
            expect(emp.getID()).toBe(testID);
        });
    });

    // getID
    describe("getEmail",() => {
        it('can get name via getName', () =>{
            const email = `drigo@test.com`
            const emp = new Employee("Drigo", 2, email);
            expect(emp.getEmail()).toBe(email);
        });
    });

    // getRole
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const emp = new Employee("Drigo", 1, "Drigo@test.com");
            expect(emp.getRole()).toBe(testValue);
        });
    });
});

