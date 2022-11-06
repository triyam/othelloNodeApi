const express = require("express");
const router = express.Router();

module.exports = router;

const User = require("../model/userSchema");

router.get("/getHighestScore", async (req, res) => {
  // get Highest Score between all users

  try {
    const hightestScore = await User.find().sort("-highScore").limit(1);
    console.log(hightestScore[0]);
    return res.status(201).json({
      highScore: hightestScore[0].highScore,
      message: "Highest Score",
    });
  } catch (error) {
    return res.status(501).json({ message: "Server issue" });
  }
});

router.get("/getHighestLevel", async (req, res) => {
  // get Highest Level between all users

  try {
    const hightestLevel = await User.find().sort("-highestLevel").limit(1);
    console.log(hightestLevel[0]);
    return res.status(201).json({
      highestLevel: hightestLevel[0].highestLevel,
      message: "Highest Level",
    });
  } catch (error) {
    return res.status(501).json({ message: "Server issue" });
  }
});

router.get("/getLowestRank", async (req, res) => {
  // get Lowest Rank between all users

  try {
    const lowestRank = await User.find().sort("highestRank").limit(1);
    console.log(lowestRank[0]);
    return res.status(201).json({
      lowestRank: lowestRank[0].highestRank,
      message: "Lowest Rank",
    });
  } catch (error) {
    return res.status(501).json({ message: "Server issue" });
  }
});

router.get("/getRankList", async (req, res) => {
  // get Rank List of users ranking from 1 to max number of user

  try {
    let limit = parseInt(req.body.limit) || 10;
    let page = parseInt(req.body.page) - 1 || 0;
    var query = {};
    let users = await User.find({})
      .sort({ highestRank: -1 })
      .skip(limit * page)
      .limit(limit)
      .select("username email highestLevel highScore highestRank");
    const count = await User.countDocuments(query);
    return res.status(201).json({
      total: count,
      limit: limit,
      page: page + 1,
      message: "User list rankwise in decending order",
      users,
    });
  } catch (error) {
    return res.status(501).json({ message: "Server issue" });
  }
});

router.get("/getLastScore/:id", async (req, res) => {
  // get the Last Score of player from user
  // It must be inside the
  //
  // lastLogin: [
  //     0: {
  //         lastScore: <The Last score>
  //     }
  // ]
  try {
    const userLastScore = await User.findOne({ _id: req.params.id });
    console.log(userLastScore);
    return res.status(201).json({
      lastScore: userLastScore.lastLogin[0].lastScore,
      message: "Last Score",
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ message: "Server issue" });
  }
});

router.get("/getLastLevel/:id", async (req, res) => {
  // get the Last Level of player from user
  // It must be inside the
  //
  // lastLogin: [
  //     0: {
  //         lastLevel: <The Last Level>
  //     }
  // ]
  try {
    const userLastLevel = await User.findOne({ _id: req.params.id });
    console.log(userLastLevel);
    return res.status(201).json({
      lastLevel: userLastLevel.lastLogin[0].lastLevel,
      message: "Last Level",
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ message: "Server issue" });
  }
});

router.get("/getLastRank/:id", async (req, res) => {
  // get the Last Rank of player from user
  // It must be inside the
  //
  // lastLogin: [
  //     0: {
  //         lastRank: <The Last Rank>
  //     }
  // ]
  try {
    const userLastRank = await User.findOne({ _id: req.params.id });
    console.log(userLastRank);
    return res.status(201).json({
      lastRank: userLastRank.lastLogin[0].lastRank,
      message: "Last Rank",
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ message: "Server issue" });
  }
});

router.post("/setLastScore", async (req, res) => {
  // Set the Last Score of player from user
  // It must be inside the
  //
  // lastLogin: [
  //     0: {
  //         lastScore: <The Last Score>
  //     }
  // ]
});

router.post("/setLastLevel", async (req, res) => {
  // set the Last Level of player from user
  // It must be inside the
  //
  // lastLogin: [
  //     0: {
  //         lastLevel: <The Last Level>
  //     }
  // ]
});

router.post("/setLastRank", async (req, res) => {
  // set the Last Rank of player from user
  // It must be inside the
  //
  // lastLogin: [
  //     0: {
  //         lastRank: <The Last Rank>
  //     }
  // ]
});

router.post("/setHighestScore", async (req, res) => {
  // Highest of all the score for each user in each time login
});

router.post("/setHighestLevel", async (req, res) => {
  // Highest of all the Level for each user in each time login
});

router.post("/setHighestRank", async (req, res) => {
  // Highest of all the Rank for each user in each time login
});
