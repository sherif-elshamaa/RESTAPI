const User = require('../models/User')

async function createUser(req, res) {
    // this function takes req and res as arguments
    // this function add one new user to users collection
    const data = req.body;
    try {
        const user = await User.create({
            name: data.name,
            age: data.age,
            phone: data.phone
        })
        user.save();
        res.status(200).send("User created successfully")
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message);
    }
}

module.exports = createUser;