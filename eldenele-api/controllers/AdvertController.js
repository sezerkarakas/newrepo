const Advert = require("../models/AdvertModel");
const Category = require("../models/CategoryModel");
const Vehicle = require("../models/category_models/VehicleModel");
const Residence = require("../models/category_models/ResidenceModel");
const Electronic = require("../models/category_models/ElectronicModel");
const Fashion = require("../models/category_models/FashionModel");
const HomeAndGarden = require("../models/category_models/HomeAndGardenModel");
const SecondHand = require("../models/category_models/SecondHandModel");
const SparePart = require("../models/category_models/SparePartModel");
const Image = require("../models/ImageModel");
const fs = require("fs");
const User = require("../models/UserModel");

const getAllAdverts = async (req, res) => {
  try {
    const adverts = await Advert.find({});

    console.log("başarı");
    res.json(adverts);
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const getAdvert = async (req, res) => {
  try {
    const advert = await Advert.findById(req.params.id);

    res.json(advert);
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const getUsersAdverts = async (req, res) => {
  try {
    const kullaniciId = req.params.kullaniciId;
    const ilanlar = await Advert.find({ userId: kullaniciId });

    res.json(ilanlar);
  } catch (err) {
    console.error(err);
    res.status(500).send("İlanlar alınırken bir hata oluştu.");
  }
};

const newVehicleAdvert = async (req, res) => {
  try {
    const v = await Vehicle.create(req.body);

    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};
const newResidenceAdvert = async (req, res) => {
  try {
    const v = await Residence.create(req.body);

    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};
const newElectronicAdvert = async (req, res) => {
  try {
    const v = await Electronic.create(req.body);

    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};
const newFashionAdvert = async (req, res) => {
  try {
    const v = await Fashion.create(req.body);

    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const newHomeAndGardenAdvert = async (req, res) => {
  try {
    const v = await HomeAndGarden.create(req.body);

    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};
const newSecondHandAdvert = async (req, res) => {
  try {
    const v = await SecondHand.create(req.body);

    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};
const newSparePartAdvert = async (req, res) => {
  try {
    const v = await SparePart.create(req.body);

    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const deleteAdvert = async (req, res) => {
  try {
    await Advert.findByIdAndDelete(req.params.id);
    console.log("ürün silindi");
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const updateAdvert = async (req, res) => {
  try {
    await Advert.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log("ürün güncellendi");
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const newCategory = async (req, res) => {
  try {
    await Category.create(req.body);
    console.log("kategori başarıyla eklendi!");
    const cat = await Category.find({});

    res.end();
  } catch (error) {
    console.log(error);
  }
};

const uploadImage = (req, res) => {
  const { path, mimetype } = req.file;
  const img = fs.readFileSync(path);
  const encodedImg = img.toString("base64");

  const finalImg = {
    contentType: mimetype,
    image: Buffer.from(encodedImg, "base64"),
  };

  const newPhoto = new Image({
    data: finalImg,
  });

  newPhoto
    .save()
    .then(() => {
      console.log(newPhoto);
      res.status(200).send("file uploaded");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred while uploading the file.");
    });

  res.sendStatus(200);
};

module.exports = {
  getAdvert,
  getAllAdverts,
  newCategory,
  newVehicleAdvert,
  newResidenceAdvert,
  newElectronicAdvert,
  newFashionAdvert,
  newSecondHandAdvert,
  newHomeAndGardenAdvert,
  newSparePartAdvert,
  deleteAdvert,
  updateAdvert,
  uploadImage,
  getUsersAdverts,
};
