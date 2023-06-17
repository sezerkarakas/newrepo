const {
  addToLikedAds,
  getLikedAds,
  removeAdLikedMovies,
} = require("../controllers/UserController");
const advertController = require("../controllers/AdvertController");

const router = require("express").Router();

router.post("/add", addToLikedAds);
router.get("/liked/:email", getLikedAds);
router.put("/remove", removeAdLikedMovies);
router.get("/api/getAll", advertController.getAllAdverts);
router.get("/get/:id", advertController.getAdvert);
router.post("/api/category", advertController.newCategory);
router.post("/api/vehicle", advertController.newVehicleAdvert);
router.post("/api/residence", advertController.newResidenceAdvert);
router.post("/api/electronic", advertController.newElectronicAdvert);
router.post("/api/fashion", advertController.newFashionAdvert);
router.post("/api/homeAndGarden", advertController.newHomeAndGardenAdvert);
router.post("/api/secon dHand", advertController.newSecondHandAdvert);
router.post("/api/sparePart", advertController.newSparePartAdvert);
router.delete("/api/delete/:id", advertController.deleteAdvert);
router.put("/api/update/:id", advertController.updateAdvert);
module.exports = router;
