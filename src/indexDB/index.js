import Dexie from 'dexie';

// const db = new Dexie('TodoLists');
//     db.version(1).stores(
//       { items: "user_id,text_id,text" }
//     );
//     db.open().catch(function (err) {
//         console.error (err.stack || err);
//     });

export const db = new Dexie("ToDoLists");
db.version(1).stores({
    data: '++id, user_id, text_id, text'
});
