const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secretekey = "vau.phy@2025";

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).send("Please provide the required fields!");
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).send("Username already available");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const results = await User.create({ username, email, password: hashedPassword });

        return res.status(200).json(results);

    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});


//login authentication
router.post('/login', async (req, res) => {
    try {
        let { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send("Please provide the required fields!");
        }

        //check username 
        const user = await User.findOne({username})
        if(!user) {
            return res.status(409).send("please check your username and password");
        }

        //check password
        const passMatch = await bcrypt.compare(password,user.password)
        if(!passMatch) {
            return res.status(409).send("please check your username and password");
        }

        //create token
        const payload={ID:user._id,NAME:user.username}
        const token=jwt.sign(payload,secretekey)

        return res.status(200).json(token);

    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

module.exports = router;
