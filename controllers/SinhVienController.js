// controllers/SinhVienController.js
const SinhVien = require('../models/SinhVien');

class SinhVienController {
  static layDanhSachSinhVien(req, res) {
      SinhVien.find()
      .then(sinhvien => res.json(sinhvien))
      .catch(err => res.json("Lỗi /student: " + err))
    }
}


module.exports = SinhVienController;