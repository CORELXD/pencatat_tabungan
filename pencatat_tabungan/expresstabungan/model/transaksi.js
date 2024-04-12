const connection = require('../config/database.js');

class transaksi {
    static async getAll() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT transaksi.*, kategori.nama_kategori AS nama_kategori FROM transaksi LEFT JOIN kategori ON transaksi.id_kategori = kategori.id_kategori ORDER BY transaksi.id_transaksi DESC', (err, rows) => {
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
            connection.query('INSERT INTO transaksi SET ?', data , function(err, result){
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
            connection.query('SELECT transaksi.*, kategori.nama_kategori AS nama_kategori FROM transaksi LEFT JOIN kategori ON transaksi.id_kategori = kategori.id_kategori WHERE transaksi.id_transaksi = ?', id, (err, rows) => {
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
            connection.query('UPDATE transaksi SET ? WHERE id_transaksi = ?', [data, id], function(err, result){
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
            connection.query('DELETE FROM transaksi WHERE id_transaksi = ?', id, function(err, result){
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }); 
        }); 
    }
}

module.exports = transaksi;
