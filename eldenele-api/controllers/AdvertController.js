const Advert = require("../models/AdvertModel");
const Category = require("../models/CategoryModel");
const Vehicle = require("../models/category_models/VehicleModel");
const Residence = require("../models/category_models/ResidenceModel");
const Electronic = require("../models/category_models/ElectronicModel");
const Fashion = require("../models/category_models/FashionModel");
const HomeAndGarden = require("../models/category_models/HomeAndGardenModel");
const SecondHand = require("../models/category_models/SecondHandModel");
const SparePart = require("../models/category_models/SparePartModel");

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
    console.log(advert);
    res.json(advert);
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const newVehicleAdvert = async (req, res) => {
  try {
    const v = await Vehicle.create(req.body);
    console.log(v);
    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};
const newResidenceAdvert = async (req, res) => {
  try {
    const v = await Residence.create(req.body);
    console.log(v);
    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};
const newElectronicAdvert = async (req, res) => {
  try {
    const v = await Electronic.create(req.body);
    console.log(v);
    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};
const newFashionAdvert = async (req, res) => {
  try {
    const v = await Fashion.create(req.body);
    console.log(v);
    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const newHomeAndGardenAdvert = async (req, res) => {
  try {
    const v = await HomeAndGarden.create(req.body);
    console.log(v);
    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};
const newSecondHandAdvert = async (req, res) => {
  try {
    const v = await SecondHand.create(req.body);
    console.log(v);
    res.json(v);
    res.end();
  } catch (error) {
    console.log(error);
  }
};
const newSparePartAdvert = async (req, res) => {
  try {
    const v = await SparePart.create(req.body);
    console.log(v);
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
    console.log(cat);
    res.end();
  } catch (error) {
    console.log(error);
  }
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
};
