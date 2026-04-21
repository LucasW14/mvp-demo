"use strict";
const express = require("express");
const router = express.Router();
const eventController = require('../controllers/eventController');

const cors = require('cors');

const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true // Allow cookies and authentication headers
};

router.use(cors(corsOptions));

router.get("/:type", eventController.getEventsType);
router.get("/", eventController.getEvents)
router.post("/addEvent", eventController.addEvent);


module.exports = router;