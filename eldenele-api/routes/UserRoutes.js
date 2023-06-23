const {
  addToLikedAds,
  getLikedAds,
  removeAdLikedMovies,
  getUser,
} = require("../controllers/UserController");
const advertController = require("../controllers/AdvertController");
const multer = require("multer");
const Image = require("../models/ImageModel");

const upload = multer({ dest: "uploads/" });
const router = require("express").Router();

router.post("/add", addToLikedAds);
router.get("/liked/:email", getLikedAds);
router.put("/remove", removeAdLikedMovies);
router.get("/getAll", advertController.getAllAdverts);
router.get("/get/:id", advertController.getAdvert);
router.post("/category", advertController.newCategory);
router.post("/vehicle", advertController.newVehicleAdvert);
router.post("/residence", advertController.newResidenceAdvert);
router.post("/electronic", advertController.newElectronicAdvert);
router.post("/fashion", advertController.newFashionAdvert);
router.post("/homeAndGarden", advertController.newHomeAndGardenAdvert);
router.post("/secondHand", advertController.newSecondHandAdvert);
router.post("/sparePart", advertController.newSparePartAdvert);
router.delete("/delete/:id", advertController.deleteAdvert);
router.put("/update/:id", advertController.updateAdvert);
router.get("/ilanlar/:id", advertController.getUsersAdverts);
router.get("/getUser/:id", getUser);
//router.post("/upload", upload.single("photo"), advertController.uploadImage);
// Express.js API

// Fotoğraf modelini ve MongoDB bağlantısını ekle (yukarıdaki örneğe bakabilirsiniz)

// Base64 formatındaki fotoğrafları döndüren endpoint
router.get("/photos", async (req, res) => {
  try {
    const photos = await Image.find({});
    const photoData = photos.map((photo) => ({
      id: photo._id,
      data: photo.data,
    }));
    res.json(photoData);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching the photos.");
  }
});

module.exports = router;
