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

// /api/thoughts
router.route('/').get(getAllThought).post(addThought);

// /api/thoughts/<thoughtId>
router.route('/:thoughtId').get(getThoughtById).put(updateThought).post(addReaction).delete(removeThought);

// /api/thoughts/<thoughtId>/<reactionId>
router.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;