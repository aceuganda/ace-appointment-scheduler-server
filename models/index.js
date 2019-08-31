const mongoose = require("mongoose");
const Schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose),
  ObjectId = mongoose.Schema.Types.ObjectId;
const slotSchema = new Schema({
  slot_startDate: String,
  slot_endDate: String,
  slot_startTime: String,
  slot_endTime: String,
  created_at: Date
});
const Slot = model("Slot", slotSchema);
const appointmentSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  organisation: String,
  purpose: String,
  skillset: String,
  analysis: String,
  number: Number,
  description: String,
  recommendation: String,
  phone: Number,
  slots: { type: ObjectId, ref: "Slot" },
  created_at: Date
});
const Appointment = model("Appointment", appointmentSchema);

module.exports = {
  Appointment,
  Slot
};
