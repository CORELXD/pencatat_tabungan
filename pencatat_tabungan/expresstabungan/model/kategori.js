const connection = require('../config/database.js');

class Kategori {
    static async getAll() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM kategori', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            }); 
        }); 
    }
    
    static async store(data) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO kategori SET ?', data, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }); 
        }); 
    }
    
    static async getById(id) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM kategori WHERE id_kategori = ?', id, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            }); 
        }); 
    }
    
    static async update(id, data) {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE kategori SET ? WHERE id_kategori = ?', [data, id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }); 
        }); 
    }
    
    static async delete(id) {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM kategori WHERE id_kategori = ?', id, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }); 
        }); 
    }
}

module.exports = Kategori;
