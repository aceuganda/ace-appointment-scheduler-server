const router = require("express").Router();
const appointmentController = require("../../controllers/appointments");
const slotController = require("../../controllers/slot");
router.get("/appointments", appointmentController.all);
router.get("/retrieveSlots", slotController.all);
router.post("/appointmentCreate", appointmentController.create);
module.exports = router;
