const router = require('express').Router();
const { 
    getAllThought,
    getThoughtById,
    addThought,
    updateThought, 
    removeThought, 
    addReaction, 
    removeReaction 
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').get(getAllThought).post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').get(getThoughtById).put(updateThought).post(addReaction).delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;