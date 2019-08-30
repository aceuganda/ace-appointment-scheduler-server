const Model = require("../models/index");
const { Appointment, Slot } = Model;

const slotController = {
  all(req, res) {
    // Returns all Slots
    Slot.find({}).exec((err, slots) => res.json(slots));
  },
  create(req, res) {
    var requestBody = req.body;

    var newslot = new Slot({
      slot_startDate: requestBody.slot_startDate,
      slot_endDate: requestBody.slot_endDate,
      slot_startTime: requestBody.slot_startTime,
      slot_endTime: requestBody.slot_endTime,
      created_at: Date.now()
    });
    newSlot.save((err, saved) => {
      //Returns the new slot
      //after a successful save
      Slot.findOne({ _id: saved._id }).exec((err, slot) => res.json(slot));
    });
  },
  findByDate(req, res) {
    var slot_date = req.params.slot_startDate;
    console.log("slot start date: ", slot_startDate);
    //slot_date = '2017-11-09';

    //Returns all slot with present date
    Slot.find({})
      .where("slot_startDate")
      .equals(slot_startDate)
      .exec((err, slots) => res.json(slots));
  }
};

module.exports = slotController;
