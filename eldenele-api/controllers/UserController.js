const User = require("../models/UserModel");

module.exports.getLikedAds = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", ads: user.likedAds });
    } else {
      return res.json({ msg: "User with given email not found." });
    }
  } catch (error) {
    return res.json({ msg: error });
  }
};

module.exports.addToLikedAds = async (req, res) => {
    try {
      const { email, likedList } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        const { likedAds } = user;
        const adId = likedList[likedList.length - 1];
        const adAlreadyLiked = likedAds.some((ad) => ad === adId);
        if (!adAlreadyLiked) {
          user.likedAds.push(likedList[likedList.length - 1]);
          await user.save();
          return res.json({ msg: "Ad successfully added to the liked list." });
        } else {
          return res.json({ msg: "Ad already added to the liked list." });
        }
      } else {
        await User.create({ email, likedAds: likedList });
        return res.json({ msg: "Ad successfully added to the liked list." });
      }
    } catch (error) {
      return res.json({ msg: "Error adding ad to the liked list" });
    }
  };
  
  

module.exports.removeAdLikedMovies = async (req, res) => {
  try {
    const { email, adId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedAds } = user;
      const adIndex = likedAds.findIndex(({ id }) => id === adId);
      if (adIndex !== -1) {
        likedAds.splice(adIndex, 1);
        await user.save();
        return res.json({ msg: "Ad successfully removed.", ads: likedAds });
      } else {
        return res.status(400).json({ msg: "Ad not found." });
      }
    } else {
      return res.json({ msg: "User with given email not found." });
    }
  } catch (error) {
    return res.json({ msg: "Error removing ad from the liked list" });
  }
};
