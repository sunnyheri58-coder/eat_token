const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true,
    unique: true
  },
  currentPrice: {
    type: Number,
    required: true
  },
  marketCap: Number,
  volume24h: Number,
  priceChange24h: Number,
  description: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Token', tokenSchema);