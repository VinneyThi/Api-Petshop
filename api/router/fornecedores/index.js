const router = require('express').Router();

router.use('/',(request, response)=> {response.send('show')})

module.exports = router;