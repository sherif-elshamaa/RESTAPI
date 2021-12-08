const User = require('../models/User')

async function findUsers(req, res) {
    // this function find all users on users collection
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
}

module.exports = findUsers;