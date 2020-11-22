import users from './users.js';

// =============================== Задание 1 ===============================
// const getUserNames = users => users.map(user => user.name);

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// =============================== Задание 2 ===============================

// const getUsersWithEyeColor = (users, color) =>
// users.filter(({ eyeColor }) => eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// =============================== Задание 3 ===============================

// const getUsersWithGender = (users, gender) =>
// users.filter(user => user.gender === gender).map(({ name }) => name);

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// =============================== Задание 4 ===============================

// const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// =============================== Задание 5 ===============================

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
