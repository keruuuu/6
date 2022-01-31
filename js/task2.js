import users from "./users.js";
const getUsersWithEyeColor = (users, color)  => users.filter(pearson => pearson.eyeColor == color)

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]