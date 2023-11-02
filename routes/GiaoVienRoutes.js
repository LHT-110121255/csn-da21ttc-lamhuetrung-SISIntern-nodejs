const express = require('express');
const router = express.Router();
const GiaovienController = require('../controllers/GiaoVienController');
const TintucController = require('../controllers/TinTucController');

router.get('/danhsachgiaovien', GiaovienController.layDanhSachGiaovien);
router.get('/tintuc', TintucController.layThongBao);

module.exports = router;