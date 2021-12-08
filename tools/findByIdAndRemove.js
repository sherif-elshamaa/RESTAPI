const User = require('../models/User')

async function findByIdAndRemove(req, res) {
    // this function take req and res as an arguments
    // this function find one user matching the req.params.id on users collection
    // then delete this person
    const id = req.params.id;
    const exist = await User.exists({ _id: id })
    if (!exist) {
        res.status(404).send("user not found")
        return;
    }
    try {
        await User.findByIdAndRemove(id);
        res.status(200).send("user removed successfully")
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message);
    }

}

module.exports = findByIdAndRemove;