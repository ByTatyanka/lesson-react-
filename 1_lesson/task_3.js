class Human {
    constructor(name, age, dateOfBirth) {
        name;
        age;
        dateOfBirth
    }

    displayInfo() {
        return `name: ${this.name} age: ${this.age} dateOfBirth: ${this.dateOfBirth}`
    }
}

class Employee extends Human {
    constructor(salary, department, name, age, dateOfBirth) {
        super(name, age, dateOfBirth);
        salary;
        department;
    }

    displayInfo() {
        let data = super.displayInfo()
        return data + `salary: ${this.salary} department: ${this.department}`
    }
}

class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department)
        this._manager = null;
    }

    changeManager(manager) {
        this.manager = manager;
    }
}

class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department)
        this._developer = [];
    }

    addDeveloper(developer) {
        this._developer.push(developer);
        return true

    }

    removeDeveloper(developer) {
        let index = this._developer.indexOf(developer);
        if (index === -1) return false;
        this._developer.splice(index, 1);
        return true

    }
}


let dev1 = new Developer(1, 2, 4, 5, 5);
let dev2 = new Developer("alex", "23", "21", "15", 'web');
let dev3 = new Developer("agfd", "43", "25", "13", 'web');
let man = new Manager("man", "34", "24", "23", "web");


dev1.changeManager(man)
dev2.changeManager(man)
dev3.changeManager(man)

man.addDeveloper(dev1)
man.addDeveloper(dev2)
man.addDeveloper(dev3)
man.removeDeveloper(dev1)

console.log(man);


