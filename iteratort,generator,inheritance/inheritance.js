//single inheritance or prototypt based inheritance
class Wizard {
    constructor(name, house) {
        this.name = name;
        this.house = house;
    }

    castSpell() {
        console.log(`${this.name} casts a spell!`);
    }
}

// Child class inheriting from Wizard
class StudentWizard extends Wizard {
    constructor(name, house, year) {
        super(name, house);
        this.year = year;
    }

    study() {
        console.log(`${this.name} studies their magical subjects.`);
    }
}

const harry = new StudentWizard("Harry Potter", "Gryffindor", 1);

harry.castSpell();
harry.study();
console.log(harry.house);
console.log(harry.year);
