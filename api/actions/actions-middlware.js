// add middlewares here related to actions
const { prependListener } = require('../server');
const Actions = require('./actions-model');

async function validateActionId (req, res, next) {
    try {
        const action = await Actions.get(req.params.id)
            if (!action) {
                res.status(404).json({
                    message: 'action not found'
                })
            } else {
                req.action = action
                next()
            }
    } catch (err) {
        res.status(500).json({
            message: 'problem finding project',
        })
    }
}

function validateAction (req, res, next) {
    const { notes, description, completed, project_id } = req.body
        if (!notes || !description || !project_id || completed === undefined){
            res.status(400).json({
                message: 'missing notes, description, project id or completed',
            })
        } else {
            req.notes = notes
            req.description = description
            req.completed = completed
            req.project_id = project_id
            next()
        }
}

module.exports = {
    validateActionId,
    validateAction,
}