// TODOS
export const getTodosList = (state) => state.todos.data;

//USERS
export const getUsers = (state) => state.users.users[0];

//USER
export const getUser = (state) => state.user.user[0];

//ADMIN
export const getRegister = (state) => state.admin;
export const getLogin = (state) => state.admin;