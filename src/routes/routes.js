const router = require('express').Router();
const SetController = require('../controllers/SetData.controller')


router.post('/data', SetController.store)
router.get('/data', SetController.getDatas)

router.post('/register', SetController.register)



module.exports = router;