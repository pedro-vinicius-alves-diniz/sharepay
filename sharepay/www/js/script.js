import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


async function CreateAndOpenBD(){
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    CreateTables(db)
}

function CreateTables(database){
    database.run(`
        CREATE TABLE IF NOT EXISTS usuarios (
            email VARCHAR PRIMARY KEY,
            password VARCHAR,
            nome TEXT,
            cognome TEXT, 
            nascita VARCHAR
        )
    `);
}

export function AddItem(database, email, password, nome, cognome, nascita){
    const codice = `INSERT INTO usuarios (email, password, nome, cognome, nascita) VALUES ?,?,?,?,?`;

    database.run(codice, [email, password, nome, cognome,nascita])
}

CreateAndOpenBD();