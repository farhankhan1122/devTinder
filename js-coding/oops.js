// -----INHERITANCE 
// one class can inherit properties of another class (code reuse and less dublication)

class Animal {
    eat() {
        console.log("Eating")
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking")
    }
}

const dog = new Dog()

dog.eat()
dog.bark()


// -----ENCAPSULATION (Data Hiding)
// Wrapping data and methods into a single unit (class) and controlling access.

class BankBalance {
    #balance = 1000

    getBalance() {
        return this.#balance
    }
}

const bank = new BankBalance()
// console.log(bank.#balance)
// Property '#balance' is not accessible outside class 'BankBalance' because it has a private identifier.ts(18013)
// console.log(bank.getBalance())



// ----ABSTRACTION (Hide Complexity OR Hide implementation)
// Show only necessary details and hide internal implementation.

class Car {
  start() {
    this.#engineStart();
    console.log("Car started");
  }

  #engineStart() {
    console.log("Engine running");
  }
}

const car = new Car();
car.start();


// ----------Polymorphism (Many Forms)

// Same method behaves differently.
// Method Overriding Example:
class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Cat meows");
  }
}

new Dog().sound();
new Cat().sound();


/**
 * Additional OOP Terms
        Class
        Blueprint of object.
        class Student {}

        Object
        Instance of class.
        const s1 = new Student();

        Constructor
        Special method called automatically.
        class User {
            constructor(name){
            this.name = name;
            }
        }



        Quick Interview Answers

        Q: Difference between Class and Object?

        Class → Blueprint
        Object → Real instance

        Q: Encapsulation vs Abstraction?

        Encapsulation → Hide data
        Abstraction → Hide implementation

        Q: Inheritance vs Composition?

        Inheritance → IS-A relationship
        Composition → HAS-A relationship

        Q: Why OOP?

        Reusability
        Maintainability
        Scalability
        Security
        Easy Memory Trick:
        E → Encapsulation → Hide Data
        A → Abstraction → Hide Complexity
        I → Inheritance → Reuse Code
        P → Polymorphism → Many Behaviors

        (EAIP)
 * 
 */