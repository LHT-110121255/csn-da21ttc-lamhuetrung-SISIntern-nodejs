const express = require('express');
const router = express.Router();
const SinhVienController = require('../controllers/CongTyController');

router.get('/danhsachcongty', SinhVienController.layDanhSachCongty);

module.exports = router;