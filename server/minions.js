const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/api/minions', (req, res, next) => {
  res.send(minions);
});

apiRouter.post('apis/minions', (req, res, next) => {
  const receivedMinion = createMinion('minions', req.query);
  if (receivedMinion) {
    minions.push(receivedMinion);
    res.status(201).send(receivedMinion);
  } else {
    res.status(400).send();
  }
});

apiRouter.get('/apis/minions/:minionId', (req, res, next) => {
  const minions = getElementById(req.params.id, minions);
  if (minions) {
    res.send(minions);
  } else {
    res.status(404).send('Minions not found.');
  }
});

apiRouter.put('/apis/minions/:minionId', (req, res, next) => {
  const minions = getElementById(req.params.id, minions);
  if (minionIndex !== -1) {
    updateElement(req.params.id, req.query, animals);
    res.send(minions[minionIndex]);
  } else {
    res.status(404).send();
  }
});

apiRouter.delete('/apis/minions/:minionID', (req, res, next) => {
  const minionIndex = getElementById(req.params.id, minions);
  if (minionIndex !== -1) {
    minions.splice(minionIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = apiRouter;
