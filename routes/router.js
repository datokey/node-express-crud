const express = require('express');
const router  = express.Router();
const {
  getFilem,
  deleteFilem,
  putFilem,
  postFilem,
  getFilemById,
} = require("../controller/filemController");

router.get('/filem', getFilem);

router.get("/filem/:id", getFilemById);


router.post('/filem', postFilem);

router.put('/filem/:id', putFilem);

router.delete('/filem/:id',deleteFilem);

module.exports = router