import { connect } from "./db.js";

async function insertProprietario(proprietario) {
    const conn = await connect();
    try {
        //IDEAL MANDAR EM VARIAVEL OS DADOS, PRA EVITAR SQL INJECT, EXEMPLO PASSAR NO CAMPO NOME: "JULIANA; DELETE * FROM CLIENTS"
        //RETURNIN *, FAZ COM QUE APÓS A INSERÇÃO RETORNE TODOS OS DADOS INSERIDOS
        const sql = "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *";
        const values = [
            proprietario.nome, 
            proprietario.telefone
        ]
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function getProprietarios() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM proprietarios");
        return res.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function getProprietario(id) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM proprietarios WHERE proprietario_id = $1", [id]);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function updateProprietario(proprietario) {
    const conn = await connect();
    try {
        const sql = "UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *";
        const values = [
            proprietario.nome, 
            proprietario.telefone,
            proprietario.proprietario_id
        ]
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function deleteProprietario(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM proprietarios WHERE proprietario_id = $1", [id]);
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

export default {
    insertProprietario,
    getProprietarios,
    getProprietario,
    updateProprietario,
    deleteProprietario
}