function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  }
}

let alex = {
  name: 'Alex'
}

let method = function() {
  console.log(`${this.name} is studying hard.`);
}

let bound = myBind(method, alex);

console.log(bound());
