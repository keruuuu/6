import users from "./users.js";
const getUserNames = (users) => users.map(person => person.name)

console.log(getUserNames(users));