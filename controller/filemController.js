const express = require("express");
const filemModel = require("../models/filemModel")



//mengambil data semua filem
const getFilem = async (req, res) => {
 try {
   const filem = await filemModel.findAll({});
   res.json(filem)
 } catch (error) {
    console.log(error.message);
    res.status(500).send('server error');
 }
};

// mengabil data filem berdasarkan id filem
const getFilemById = async (req, res) => {
 
  try {
    const id = req.params.id;
    const filem = await filemModel.findOne({
      where:{id:id}
    });
    res.json(filem);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
};
 

//post filem ke database
const postFilem = async (req, res) => {
  try {
    const {judul, deskripsi, rating} = req.body;
    const store = new filemModel({
      judul, deskripsi, rating
    });
    await store.save();
    res.json(store);

  } catch (error) {
    console.log(error.message);
    res.status(500).send('server error');
  }
};


//update filem 
const putFilem = async (req, res) => {
  try {
    const { judul, deskripsi, rating } = req.body;
    const id = req.params.id;
    const updateFilem = await filemModel.update({
      judul,
      deskripsi,
      rating,
    },{ where:{id:id}});

    await updateFilem;
    res.json("success")

  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
};



//delete filem 
const deleteFilem = (req, res) => {
  res.send("delete filem");
};




// export modulnya disini
module.exports = {
  getFilem,
  postFilem,
  putFilem,
  deleteFilem,
  getFilemById,
};
