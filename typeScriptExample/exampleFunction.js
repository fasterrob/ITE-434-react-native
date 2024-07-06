var people = [
    { name: "John lee", age: 30 },
    { name: "Marry Burner", age: 25 },
    { name: "Harry Kill", age: 35 },
];
function fillterAdults(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
console.log(fillterAdults(people));
