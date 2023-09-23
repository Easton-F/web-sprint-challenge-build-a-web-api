// add middlewares here related to projects
const Project = require('./projects-model')

async function validateProjectId (req, res, next) {
    try {
        const project = await Project.get(req.params.id)
        if(!project) {
            res.status(404).json({
                message: 'no such project',
            })
        } else {
            req.project = project
            next()
        }
    } catch (err) {
        res.status(500).json({
            message: 'problem finding project',
        })
    }
}

function validateProject (req, res, next) {
    const { name, description } = req.body
    if (!name || !description) {
        res.status(400).json({
            message: 'missing name or description',
        })
    } else {
        req.name = name
        req.description = description
        next()
    }
}

module.exports = { 
    validateProjectId, 
    validateProject,
}