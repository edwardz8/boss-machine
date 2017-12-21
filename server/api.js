const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('minionsRouter');
const meetingsRouter = require('meetingsRouter');
const ideasRouter = require('ideasRouter');

apiRouter.use('/minions', minionsRouter);

apiRouter.use('/meetings', meetingsRouter);

apiRouter.use('/ideas', ideasRouter);


module.exports = apiRouter;
