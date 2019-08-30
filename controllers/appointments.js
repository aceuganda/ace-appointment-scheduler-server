// import Model from "../models/index";
const Model = require("../models/index");
const { Appointment, Slot } = Model;
const Nexmo = require("nexmo");
const appointmentController = {
  all(req, res) {
    // Returns all appointments
    Appointment.find({})
      .populate("slots")
      .exec((err, appointments) => res.json(appointments));
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
    newslot.save();
    // Creates a new record from a submitted form
    var newappointment = new Appointment({
      name: requestBody.name,
      email: requestBody.email,
      phone: requestBody.phone,
      slots: newslot._id
    });

    // and saves the record to
    // the data base
    newappointment.save((err, saved) => {
      // Returns the saved appointment
      // after a successful save
      Appointment.find({ _id: saved._id })
        .populate("slots")
        .exec((err, appointment) => res.json(appointment));
    });
  }
};
module.exports = appointmentController;
