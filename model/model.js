const mongoose = require('mongoose');

const userProfile = new mongoose.Schema({
  NAME: {
    type: String,
    required: [true, 'Name is required'],
    lowercase: true,
  },
  EMAIL: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    unique: true,
  },
  PASSWORD: {
    type: String,
    required: [true, 'Password is required'],
	},
	DESCRIPTION: {
    type: String,
    default: 'No description provided',
  },
  IMAGE_URL: {
		type: String,
		default: 'To be provided'
  },
  IMAGE_ID: {
		type: String,
		default: 'To be provided'
  },
});

module.exports.userProfile = mongoose.model('userProfile', userProfile);
