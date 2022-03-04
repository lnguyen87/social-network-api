const { User } = require('../models');

const userController = {
    // get all users - GET request
    getAllUser(req, res) {
        User.find({})
        .populate({ 
            path: 'thoughts',
            select: '-__v'
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    //get one user by id - GET request
    getUserById(req, res) {
        User.findOne({ _id: params.id })
        .populate({ 
            path: 'thoughts',
            select: '-__v'
        })
        .then(dbUserData => {
            // If no user found, send 404
            if (!dbUserData) {
                res.status(404).json({message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }, 

    // create user - POST request
    createUser(req, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },

    // update user by id - PUT request
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete user by id - DELETE request
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then (dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    }
};

module.exports = userController;