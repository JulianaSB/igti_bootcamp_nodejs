import { connect } from "./db.js";

async function insertClient(client) {
    const conn = await connect();
    try {
        //IDEAL MANDAR EM VARIAVEL OS DADOS, PRA EVITAR SQL INJECT, EXEMPLO PASSAR NO CAMPO NOME: "JULIANA; DELETE * FROM CLIENTS"
        //RETURNIN *, FAZ COM QUE APÓS A INSERÇÃO RETORNE TODOS OS DADOS INSERIDOS
        const sql = "INSERT INTO clients (name, cpf, phone, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const values = [
            client.name, 
            client.cpf,
            client.phone,
            client.email,
            client.address
        ]
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function getClients() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM clients");
        return res.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function getClient(id) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM clients WHERE client_id = $1", [id]);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function updateClient(client) {
    const conn = await connect();
    try {
        const sql = "UPDATE clients SET name = $1, cpf = $2, phone = $3, email = $4, address = $5 WHERE client_id = $6 RETURNING *";
        const values = [
            client.name, 
            client.cpf,
            client.phone,
            client.email,
            client.address,
            client.client_id
        ]
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function deleteClient(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM clients WHERE client_id = $1", [id]);
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

export default {
    insertClient,
    getClients,
    getClient,
    updateClient,
    deleteClient
}