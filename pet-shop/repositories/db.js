import pg from "pg";

async function connect() {
    if(global.connection) {
        return global.connection.connect();
    }
    const pool = new pg.Pool({
        connectionString: "postgres://ymippqpq:NR75tdY3gJTWvIIQXE7Gk_ih5A_V9jhm@kesavan.db.elephantsql.com/ymippqpq"
    });

    global.connection = pool;
    return pool.connect();
}

export {
    connect
}