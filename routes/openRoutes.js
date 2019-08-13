const router = require('express').Router();

router.get('/', (request, response) => {
  response.json({
    status: 200,
    message: 'This is Snapchat portal API',
  });
});

module.exports = router;
