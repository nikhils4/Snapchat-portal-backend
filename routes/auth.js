const router = require('express').Router();
const jwt = require('jsonwebtoken');
const UserProfile = require('../model/model.js').userProfile;
const helpers = require('../model/helpers.js');

router.post('/signup', (request, response) => {
  if (!helpers.emailValidate(request.body.email)) {
    // console.log("There was error validating your email id");
    response.json({
      status: 400,
      message: 'There was error validating your email id',
    });
  } else {
    const profile = new UserProfile({
      NAME: request.body.name,
      EMAIL: request.body.email,
      PASSWORD: helpers.hashAndReturn(request.body.password),
    });
    profile.save((err) => {
      if (err) {
        if (err.code === 11000) {
          response.json({
            status: 400,
            message: 'The given email id is already registered with us',
          });
        } else {
          response.json({
            status: 500,
            message: 'There was some error signing you up :<',
          });
        }
      } else {
        response.send({
          status: 200,
          message: 'You were successfully signed up',
        });
      }
    });
  }
});


router.post('/login', (request, response) => {
  UserProfile.findOne({
    EMAIL: request.body.email,
  }, (err, data) => {
    if (err) {
      response.json({
        status: 500,
        message: 'There was error fetching the details',
      });
    } else if (data == null || data === undefined) {
      // console.log("No such user exist try signing up first")
      response.json({
        status: 400,
        message: 'No such user exist try signing up first',
      });
      return false;
    } else {
      if ((helpers.passwordAuth(data.PASSWORD, request.body.password))) {
        const payload = {
          email: request.body.email,
        };
        const token = jwt.sign(payload, process.env.SECRET);
        response.json({
          status: 200,
          token,
          message: 'Success, the password matched successfully',
        });
        return true;
      }
      response.json({
        status: 400,
        message: 'The password entered by the user was wrong',
      });
      return false;
    }
  });
});

module.exports = router;
