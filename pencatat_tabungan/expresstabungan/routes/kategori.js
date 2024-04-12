const express = require('express');
const router = express.Router();
const kategori = require('../model/kategori.js');

// Menampilkan semua data kategori
router.get('/', async (req, res) => {
    try {
        const rows = await kategori.getAll();
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Menambahkan data kategori baru
router.post('/store', async (req, res) => {
    try {
        const { nama_kategori } = req.body;
        const data = { nama_kategori };
        await kategori.store(data);
        res.json({ message: 'Berhasil Menyimpan Data' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Mengambil data kategori berdasarkan ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await kategori.getById(id);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Mengupdate data kategori berdasarkan ID
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { nama_kategori } = req.body;
        const data = { nama_kategori };
        await kategori.update(id, data);
        res.json({ message: 'Berhasil Mengupdate Data' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Menghapus data kategori berdasarkan ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await kategori.delete(id);
        res.json({ message: 'Berhasil Menghapus Data' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
