const express = require('express');
const router = express.Router();
const activityController = require('../Controllers/activityController');

router.get('/', activityController.getAllActivities);
router.post('/create', activityController.createActivity);
router.delete('/delete/:id',activityController.deleteActivity)
router.delete('/delete',activityController.deleteAllActivities)
router.put('/update/:id', activityController.updateActivity)

module.exports = router;
