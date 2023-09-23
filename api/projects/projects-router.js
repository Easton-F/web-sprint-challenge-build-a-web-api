// Write your "projects" router here!
const express = require('express');
const {
    validateProjectId,
    validateProject,
} = require('./projects-middleware');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res, next) => {
   Projects.get()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})

router.get('/:id', validateProjectId, (req, res) => {
    res.json(req.project)
})

router.post('/', validateProject, (req, res, next) => {
    Projects.insert({ name: req.name, description: req.description })
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(next)
})

router.put('/:id', validateProjectId, (req, res) => {

})

router.delete('/:id', validateProjectId, (req, res) => {

})

router.get('/:id/actions', validateProjectId, (req, res) => {

})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'something didnt work in the router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;