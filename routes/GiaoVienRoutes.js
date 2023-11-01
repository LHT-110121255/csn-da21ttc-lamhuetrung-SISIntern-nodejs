const express = require('express');
const router = express.Router();
const SinhVienController = require('../controllers/GiaoVienController');

router.get('/danhsachgiaovien', SinhVienController.layDanhSachGiaovien);

module.exports = router;