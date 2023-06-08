const mongoose = require('mongoose');
const Model = mongoose.model('rooms');

// GET: /rooms - return all rooms
const roomsList = async (req, res) => {
    Model
        .find({})  // empty filter for all
        .exec((err, rooms) => {
            if (!rooms) {
                return res
                    .status(404)
                    .json({"message": "rooms not found"});
            }
            else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            else {
                return res
                    .status(200)
                    .json(rooms);
            }
        });
};

module.exports = { roomsList };