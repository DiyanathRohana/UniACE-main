const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    name:  { type: String, trim: true, default: null },
    phone: { type: String, trim: true, default: null },
    itNumber: { type: String, trim: true, default: null },
    role:  { type: String, default: null },
    modulesByYear: {
      type: {
        year1: [{ type: String, trim: true }],
        year2: [{ type: String, trim: true }],
        year3: [{ type: String, trim: true }],
        year4: [{ type: String, trim: true }],
      },
      default: () => ({
        year1: [],
        year2: [],
        year3: [],
        year4: [],
      }),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
