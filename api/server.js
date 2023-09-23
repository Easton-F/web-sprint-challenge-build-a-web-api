const express = require('express');
const server = express();
const projectsRouter = require('./projects/projects-router');

server.use(express.json())

server.use('/api/projects', projectsRouter);

server.use('/api/hello', (req, res)  => {
    res.status(404).json({
        message: 'i am found but not found'
    })
})

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
