const mongoose = require('mongoose');

const SubscribeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "A subscription must have a user"],
  },
  lecture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecture',
    required: [true, "A subscription must have a lecture"],
  }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add index to ensure uniqueness of user-lecture pairs
SubscribeSchema.index({ user: 1, lecture: 1 }, { unique: true });

const Subscription = mongoose.model('Subscription', SubscribeSchema);

module.exports = Subscription;
