const router = require('express').Router();
const parser = require('../model/imageUpload.js').parser;
const UserProfile = require('../model/model.js').userProfile;

router.post('/imageUpload', parser.single('image'), (request, response) => {
  // let email = request.decode.email;
  UserProfile.findOneAndUpdate({
    EMAIL: request.decode.email,
  },
  { $set: { IMAGE_URL: request.file.url, IMAGE_ID: request.file.public_id, DESCRIPTION : request.body.description } },
  { new: true })
    .then((result) => {
      if (result) {
        response.json({
          status: 200,
          message: 'Profile pic was successfully updated',
          image_url: request.file.url,
        });
      } else {
        response.json({
          status: 400,
          message: 'There was authentication error while updating the profile pic',
        });
      }
    })
    .catch(() => {
      response.json({
        status: 500,
        message: 'There was some server error while updating profile pic',
      });
    });
});

module.exports = router;
