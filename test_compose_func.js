const greet = function (x) {
  return `Hello ${x}`;
}

const personName = function (x) {
  return `${x} :)`;
}

const greet1 = function (x) {
  return `Bla bla ${x}`;
}

const personName1 = function (x) {
  return `${x} :)`;
}

const compose = function(f1, f2) {
  return function(x) {
    return f1(f2(x));
  }
}

// ----------------------------------

// here we actual call compose func
// compose func returns a func, and assign to a var
const finalFunc1 = compose(greet1, personName1);
// now we execute this func
console.log( finalFunc1("mark") );
