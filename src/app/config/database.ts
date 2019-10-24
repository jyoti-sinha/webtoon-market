import Dexie from 'https://unpkg.com/dexie@latest/dist/dexie.js';

const db = new Dexie('myDb');
db.version(1).stores({
    users: `id++, email, password, role, active`,
    webtoons: `id++, title, description, price, active`,
    books: `id++, title, description, price, active`,
    podcasts: `id++, title, description, price, active`
});

export default db;