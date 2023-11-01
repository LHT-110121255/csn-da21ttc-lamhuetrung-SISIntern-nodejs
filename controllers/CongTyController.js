const Congty = require('../models/CongTy');

class CongtyController {
  static layDanhSachCongty(req, res) {
      Congty.find()
      .then(Congtys => res.json(Congtys))
      .catch(err => res.json("Lỗi /company: " + err))
    }
}


module.exports = CongtyController;