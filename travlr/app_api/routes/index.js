const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode) 
    .put(tripsController.tripsUpdateTrip);   

router
    .route('/rooms') 
    .get(roomsController.roomsList);   

module.exports = router;    