const express = require('express');
const router = express.Router();

const transaksi = require('../model/transaksi.js');

// GET semua transaksi
router.get('/', async function(req, res, next) {
    try {
        const rows = await transaksi.getAll();
        res.json(rows); // Mengirim respons JSON
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Membuat transaksi baru
router.post('/store', async function(req, res, next) {
    try {
        const { tanggal, id_kategori, jumlah, keterangan } = req.body;
        const data = { tanggal, id_kategori, jumlah, keterangan };
        await transaksi.store(data);
        res.status(201).json({ message: 'Berhasil Menyimpan Data transaksi!' });
    } catch (error) {
        console.error('Error storing transaction:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Mendapatkan transaksi berdasarkan ID
router.get('/:id', async function(req, res, next) {
    try {
        const id = req.params.id;
        const rows = await transaksi.getById(id);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching transaction for editing:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Memperbarui transaksi berdasarkan ID
router.put('/update/:id', async function(req, res, next) {
    try {
        const id = req.params.id;
        const { tanggal, id_kategori, jumlah, keterangan } = req.body;
        const data = { tanggal, id_kategori, jumlah, keterangan };
        await transaksi.update(id, data);
        res.json({ message: 'Berhasil Mengupdate Data transaksi!' });
    } catch (error) {
        console.error('Error updating transaction:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Menghapus transaksi berdasarkan ID
router.delete('/delete/:id', async function(req, res, next) {
    try {
        const id = req.params.id;
        await transaksi.delete(id);
        res.json({ message: 'Berhasil Menghapus Data transaksi!' });
    } catch (error) {
        console.error('Error deleting transaction:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
