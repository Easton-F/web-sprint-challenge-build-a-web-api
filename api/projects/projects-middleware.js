// add middlewares here related to projects
const Project = require('./projects-model')

async function validateProjectId (req, res, next) {
    try {
        const project = Project.get(req.params.id)
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

module.exports = { 
    validateProjectId, 
}