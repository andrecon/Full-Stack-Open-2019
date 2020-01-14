const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {  
        const data = 'hello, my name is ' + this.name  
        console.log(data)
        return data  
    },
    doAddition: function(a, b) {
        console.log(a+b);
    }
}

arto.increaseAge = function() {
    this.age +=1
}
  
// arto.greet();
// console.log(arto.age);
// arto.increaseAge()
// console.log(arto.age);

// arto.doAddition(10,20);


// //There are several mechanisms by which the original this can be preserved. One of these is using a method called bind:
// setTimeout(arto.greet.bind(arto), 1000);


// const greetReference = arto.greet.bind(arto);

// greetReference();

// const refernceToAddition = arto.doAddition;

// console.log(refernceToAddition)



class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('hello, my name is', this.name)
    }
  }
  
  const adam = new Person('Adam Ondra', 35)
  adam.greet()
  
  const janja = new Person('Janja Garnbret', 22)
  janja.greet()

