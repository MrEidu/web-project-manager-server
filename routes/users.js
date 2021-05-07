const express = require('express');
const router = express.Router();
const controller=require('../controllers/users');
router.get('/:page?',controller.list);
router.get('/:id/:id',controller.index);
router.put('/:id',controller.edit);
router.delete('/:id',controller.remove);
module.exports = router;