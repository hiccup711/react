const arto = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
    greet: function(){
        console.log("Hello, my name is " + this.name)
    },
    doAddition: function(a, b) {
        console.log(a + b)
    }
}

arto.growOlder = function(){
    this.age +=1
}

console.log(arto.age)
arto.growOlder()
console.log(arto.age)

const referenceDoAddition = arto.doAddition
referenceDoAddition(10,11)

const referenceGreet = arto.greet
referenceGreet()

setTimeout(arto.greet, 1000)

setTimeout(arto.greet.bind(arto), 1000)