const express = require("express");
const router = express.Router();

module.exports = router

const User = require("../model/userSchema");


router.get("/getHighestScore", async (req, res) => {

    // get Highest Score between all users

    try {
        // const hightestScore = await User.find().sort({ highScore: +1 }).limit(1)
        // console.log(hightestScore);
        // return res.status(201).json({ hightestScore, message: "Highest Score" })
    } catch (error) {
        return res.status(501).json({ message: "Server issue" })
    }
})

router.get("/getHighestLevel", async (req, res) => {

    // get Highest Level between all users
})

router.get("/getLowestRank", async (req, res) => {

    // get Lowest Rank between all users

})

router.get("/getRankList", async (req, res) => {

    // get Rank List of users ranking from 1 to max number of user

})

router.get("/getLastScore", async (req, res) => {

    // get the Last Score of player from user
    // It must be inside the 
    //
    // lastLogin: [
    //     0: {
    //         lastScore: <The Last score>  
    //     }
    // ]

})

router.get("/getLastLevel", async (req, res) => {

    // get the Last Level of player from user
    // It must be inside the 
    //
    // lastLogin: [
    //     0: {
    //         lastLevel: <The Last Level>  
    //     }
    // ]

})

router.get("/getLastRank", async (req, res) => {

     // get the Last Rank of player from user
    // It must be inside the 
    //
    // lastLogin: [
    //     0: {
    //         lastRank: <The Last Rank>  
    //     }
    // ]

})

router.post("/setLastScore", async (req, res) => {

    // Set the Last Score of player from user
    // It must be inside the 
    //
    // lastLogin: [
    //     0: {
    //         lastScore: <The Last Score>  
    //     }
    // ]

})

router.post("/setLastLevel", async (req, res) => {

    // set the Last Level of player from user
    // It must be inside the 
    //
    // lastLogin: [
    //     0: {
    //         lastLevel: <The Last Level>  
    //     }
    // ]

})

router.post("/setLastRank", async (req, res) => {

    // set the Last Rank of player from user
    // It must be inside the 
    //
    // lastLogin: [
    //     0: {
    //         lastRank: <The Last Rank>  
    //     }
    // ]

})

router.post("/setHighestScore", async (req, res) => {

    // Highest of all the score for each user in each time login

})

router.post("/setHighestLevel", async (req, res) => {

    // Highest of all the Level for each user in each time login

})

router.post("/setHighestRank", async (req, res) => {

    // Highest of all the Rank for each user in each time login

})

