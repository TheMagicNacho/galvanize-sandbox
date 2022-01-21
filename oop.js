// School
class Ryu {

}

//Art 
class Art extends Ryu {
    constructor(name) {
        super();
        //visual indicator `_`
        this._name = name;
    }

    //ENCAPSULATION
    //syntactic sugar...
    get name() {
        return this._name;
    }

    //syntactic sugar...
    set name(value) {
        this._name = value;
    }
}

//Student
class Student {
    constructor(name) {
        this._name = name;
    }
    //generic teach
    teach () {
        console.log("I can teach only basic stuff")
    }
}

// A more specific type of Students
class SpecialStudent extends Student {
    constructor(name, art) {
        super(); // SYNTACTIC SUGAR
        this.name = name;
        this.art = art;
        this.special = "ninjitsu";
    }

    teach() {
        //encapsulation
        console.log(this.name + " teaches basic stuff and " + this.art.name);
    }

    teachesAikido() {
        console.log(this.name + " teaches Aikido");
    }

}

var judo = new Art("judo");
var james = new SpecialStudent("James", judo);

var gregory = new Student("gregory");
 
// console.log(james.constructor);
// console.log(gregory.constructor);

// Gregory is a basic Student. James knows ninjitsu. As gregory I want to access ninjitsu
//gregory.prototype.call(this, james)
// SpecialStudent.call(gregory, teachesAikido());


// console.log(gregory.special);
// gregory.teach();

james.teachesAikido.call(gregory);
console.log(gregory.special);

