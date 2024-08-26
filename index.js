const express = require('express');
const Docker = require('dockerode');
const path = require('path');

const app = express();
const docker = new Docker();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    try {
        const containers = await docker.listContainers({ all: true });
        res.render('index', { containers });
    } catch (err) {
        res.status(500).send('Error listing containers');
    }
});

app.post('/logs', async (req, res) => {
    const containerId = req.body.containerId;
    try {
        const container = docker.getContainer(containerId);
        const logs = await container.logs({ stdout: true, stderr: true });
        res.render('logs', { containerId, logs: logs.toString() });
    } catch (err) {
        res.status(500).send('Error getting logs');
    }
});

app.post('/stop', async (req, res) => {
    const containerId = req.body.containerId;
    try {
        const container = docker.getContainer(containerId);
        await container.stop();
        res.redirect('./');
    } catch (err) {
        res.status(500).send('Error stopping container');
    }
});

app.post('/start', async (req, res) => {
    const containerId = req.body.containerId;
    try {
        const container = docker.getContainer(containerId);
        await container.start();
        res.redirect('./');
    } catch (err) {
        res.status(500).send('Error starting container');
    }
});

app.post('/restart', async (req, res) => {
    const containerId = req.body.containerId;
    try {
        const container = docker.getContainer(containerId);
        await container.restart();
        res.redirect('./');
    } catch (err) {
        res.status(500).send('Error restarting container');
    }
});

const port = 3110;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

