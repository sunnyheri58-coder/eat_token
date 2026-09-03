const express = require('express');
const router = express.Router();
const Token = require('../models/Token');

// Get all tokens
router.get('/', async (req, res) => {
  try {
    const tokens = await Token.find().sort({ createdAt: -1 });
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get token by ID
router.get('/:id', async (req, res) => {
  try {
    const token = await Token.findById(req.params.id);
    if (!token) return res.status(404).json({ message: 'Token not found' });
    res.json(token);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;