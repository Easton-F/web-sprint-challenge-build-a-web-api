// Write your "projects" router here!
const express = require('express');
const {
    validateProjectId,
} = require('./projects-middleware')

const router = express.Router();

router.get('/', (req, res) => {
   console.log('hello')
})

router.get('/:id', validateProjectId, (req, res) => {
    console.log('hello again')
})

router.post('/', (req, res) => {

})

router.put('/:id', validateProjectId, (req, res) => {

})

router.delete('/:id', validateProjectId, (req, res) => {

})

router.get('/:id/actions', validateProjectId, (req, res) => {

})

module.exports = router;