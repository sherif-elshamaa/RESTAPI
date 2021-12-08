const User = require('../models/User')

async function findByIdUpdate(req, res) {
    // this function take req and res as an argument
    // this function find one user matching the req.params.id on users collection
    // then update the user according to req.body object
    const id = req.params.id
    const data = req.body
    const exist = await User.exists({ _id: id })
    if (!exist) {
        res.status(404).send("user not found")
        return
    }
    try {
        await User.findByIdAndUpdate(id, {
            $set: data
        })
        res.status(200).send("User updated successfully")
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message);
    }

}

module.exports = findByIdUpdate;