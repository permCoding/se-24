function Person(first, last, age, gender) {
    this.name = {
      first: first,
      last: last,
    };
    this.age = age;
    this.gender = gender;
}

let a = new Person("Андрей", "Беляков", 22, "male");
let b = new Person("Олег", "Яшин", 21, "male");
let c = new Person("Юля", "Колпакова", 24, "female");
const persons = [a, b, c];

console.log(persons);
let data = JSON.stringify(persons, null, 4);
console.log(data);
require('fs').writeFileSync('./data.json', data, {encoding: 'utf8'});

