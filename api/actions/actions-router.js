// Write your "actions" router here!
const express = require('express');
const {
    validateActionId,
    validateAction,
} = require('./actions-middlware');

const Actions = require('./actions-model');
const { del } = require('httpie');

const router = express.Router();

router.get('/', (req, res, next) => {
    Actions.get()
    .then(actions => {
        res.json(actions)
    })
    .catch(next)
})

router.get('/:id', validateActionId, (req, res) => {
    res.json(req.action)
})

router.post('/', validateAction, (req, res, next) => {
    Actions.insert({ notes: req.notes, description: req.description, completed: req.completed, project_id: req.project_id})
        .then(newAction => {
            res.status(201).json(newAction)
        })
        .catch(next)
})

router.put('/:id', validateActionId, validateAction, (req, res, next) => {
    Actions.update(req.params.id, { notes: req.notes, description: req.description, completed: req.completed, project_id: req.project_id})
        .then(updatedAction => {
            res.status(200).json(updatedAction)
        })
        .catch(next)
})

router.delete('/:id', validateActionId, (req, res, next) => {
    Actions.remove(req.params.id)
        .then(deletedAction => {
            res.status(200).json(deletedAction)
        })
        .catch(next)
})


module.exports = router;