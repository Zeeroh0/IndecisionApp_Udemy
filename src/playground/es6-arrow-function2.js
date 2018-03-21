// Arguments object - no longer bound! 

const add = (a,b) => {
    // console.log(arguments);
    return a+b;
}

console.log(add(14, 2));

// this keyword - no longer bound!
// In ES5 functions, the this keyword is bound. 
// In ES6 arrow functions, this takes on the parents context.

const user = {
    name: 'Andrew',
    cities: ['Philly', 'New York', 'Dublin'],
    
    // If we had the below function as an arrow function, its this value would 
    // be on its parents' scope, so the global object, resulting in an undefined 
    // value.
    // The arrow function inside of the ES5 function works b/c it binds this to 
    // its parent scope, the user object, resulting in our desired values.

    // printPlacesLived: function () {
    //     console.log(this.name);
    //     console.log(this.cities);

    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city);
    //     });
    // },
    // New ES6 way of creating methods in an object seen below.  This is technically
    // using an ES5 function, it just removes the word "function" (and the colon).
    // printPlacesLived() {
    //     const cityMessages =this.cities.map((city)=>{
    //         return this.name + ' has lived in ' + city + '!';
    //     });
    //     return cityMessages;
    // },
    // The above example can get even more simple...see below
    printPlacesLived() {
        return this.cities.map( (city) => this.name + ' has lived in ' + city + '!' );
    }
}

console.log(user.printPlacesLived());

// CHALLENGE AREA

const multiplier = {
    numbers: [4, 5, 2, 9],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map( (numb) => this.multiplyBy*numb );
    }
};

console.log(multiplier.multiply());




