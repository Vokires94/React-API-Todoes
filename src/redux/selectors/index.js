// TODOS
export const getTodosList = (id) => (state) => {
    if (state.todos.data[id])
        return state.todos.data[id];
    else return [];
}

//USERS
export const getUsers = (state) => state.users.users[0];

//USER
export const getUser = (state) => state.user.user[0];

//ADMIN
export const getRegister = (state) => state.admin;
export const getLogin = (state) => state.admin;