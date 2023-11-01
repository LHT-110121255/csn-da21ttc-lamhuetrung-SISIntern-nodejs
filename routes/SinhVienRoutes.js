const express = require('express');
const router = express.Router();
const SinhVienController = require('../controllers/SinhVienController');

router.get('/danhsachsinhvien', SinhVienController.layDanhSachSinhVien);

module.exports = router;