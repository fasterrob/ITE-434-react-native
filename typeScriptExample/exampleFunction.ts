interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "John lee", age: 30 },
  { name: "Marry Burner", age: 25 },
  { name: "Harry Kill", age: 35 },
];

function fillterAdults(persons: Person[]): Person[] {
  return persons.filter((person) => person.age >= 30);
}

console.log(fillterAdults(people));
